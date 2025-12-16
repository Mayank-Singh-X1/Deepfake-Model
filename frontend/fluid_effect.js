/**
 * Fluid Reveal Effect
 * Uses a spring-mass system to create an organic, liquid-like reveal mask.
 */

class Point {
    constructor(angle, radius) {
        this.angle = angle;
        this.baseRadius = radius;
        this.radius = radius;
        this.x = 0;
        this.y = 0;

        // Physics for "jiggle"
        this.noiseOffset = Math.random() * 1000;
        this.speed = 0.002 + Math.random() * 0.003;
    }

    update(centerX, centerY, velocityX, velocityY, time) {
        // Organic breathing
        const noise = Math.sin(time * this.speed + this.noiseOffset) * 20;

        // Velocity deformation (Squash and Stretch)
        // Project velocity onto the point's direction
        const dirX = Math.cos(this.angle);
        const dirY = Math.sin(this.angle);

        // Dot product to see how much the point aligns with movement
        const dot = dirX * velocityX + dirY * velocityY;

        // Stretch in direction of movement, squash perpendicular
        // We add a "lag" effect by pulling points opposite to movement essentially
        const stretch = dot * 1.5;

        const currentRadius = this.baseRadius + noise - stretch;

        this.x = centerX + Math.cos(this.angle) * currentRadius;
        this.y = centerY + Math.sin(this.angle) * currentRadius;
    }
}

class FluidReveal {
    constructor() {
        this.canvas = document.getElementById('fluidCanvas');
        this.ctx = this.canvas.getContext('2d');

        this.bgImg = document.getElementById('img-bg');
        this.revealImg = document.getElementById('img-reveal');

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        // Mouse state
        this.mouse = { x: this.width / 2, y: this.height / 2 };
        this.targetMouse = { x: this.width / 2, y: this.height / 2 };

        // Blob state
        this.blob = {
            x: this.width / 2,
            y: this.height / 2,
            vx: 0,
            vy: 0,
            radius: 300
        };

        // Configuration
        this.numPoints = 20;
        this.points = [];
        this.friction = 0.85; // History/Tail effect
        this.ease = 0.1; // Follow speed

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));

        // Initialize points
        for (let i = 0; i < this.numPoints; i++) {
            const angle = (i / this.numPoints) * Math.PI * 2;
            this.points.push(new Point(angle, this.blob.radius));
        }

        // Start loop
        requestAnimationFrame((t) => this.render(t));
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    onMouseMove(e) {
        this.targetMouse.x = e.clientX;
        this.targetMouse.y = e.clientY;
    }

    updateBlob() {
        // Smoothly move blob center towards mouse
        const dx = this.targetMouse.x - this.blob.x;
        const dy = this.targetMouse.y - this.blob.y;

        // Acceleration
        this.blob.vx += dx * this.ease;
        this.blob.vy += dy * this.ease;

        // Friction / Damping
        this.blob.vx *= 0.6; // Damping for position
        this.blob.vy *= 0.6;

        // Update position
        this.blob.x += this.blob.vx;
        this.blob.y += this.blob.vy;

        // Calculate velocity for deformation (smoothed)
        const velX = (this.targetMouse.x - this.blob.x) * 0.1;
        const velY = (this.targetMouse.y - this.blob.y) * 0.1;

        return { velX, velY };
    }

    drawBlobPath(time, velX, velY) {
        this.ctx.beginPath();

        // Update all points
        this.points.forEach(p => p.update(this.blob.x, this.blob.y, velX, velY, time));

        // Draw smooth path through points
        // Use Catmull-Rom spline or simple quadratic pairing
        // Simple quadratic bezier approach:
        // Move to midpoint between first and last
        const p0 = this.points[0];
        const pLast = this.points[this.points.length - 1];
        const midX = (p0.x + pLast.x) / 2;
        const midY = (p0.y + pLast.y) / 2;

        this.ctx.moveTo(midX, midY);

        for (let i = 0; i < this.points.length; i++) {
            const p = this.points[i];
            const nextP = this.points[(i + 1) % this.points.length];
            const nextMidX = (p.x + nextP.x) / 2;
            const nextMidY = (p.y + nextP.y) / 2;

            this.ctx.quadraticCurveTo(p.x, p.y, nextMidX, nextMidY);
        }

        this.ctx.closePath();
    }

    drawImageCover(img) {
        // Calculate aspect ratio to simulate object-fit: cover
        const imgRatio = img.width / img.height;
        const canvasRatio = this.width / this.height;
        let drawW, drawH, curX, curY;

        if (imgRatio > canvasRatio) {
            drawH = this.height;
            drawW = drawH * imgRatio;
            curX = (this.width - drawW) / 2;
            curY = 0;
        } else {
            drawW = this.width;
            drawH = drawW / imgRatio;
            curX = 0;
            curY = (this.height - drawH) / 2;
        }

        this.ctx.drawImage(img, curX, curY, drawW, drawH);
    }

    render(time) {
        // 1. Clear
        this.ctx.clearRect(0, 0, this.width, this.height);

        // 2. Draw Background Image
        if (this.bgImg.complete) {
            this.ctx.save();
            // Optional: Dim background slightly to make reveal pop?
            // this.ctx.filter = 'brightness(0.5)'; 
            this.drawImageCover(this.bgImg);
            this.ctx.restore();
        }

        // 3. Update Physics
        const velocity = this.updateBlob();

        // 4. Create Mask
        this.ctx.save();
        this.drawBlobPath(time, velocity.velX, velocity.velY);
        this.ctx.clip();

        // 5. Draw Reveal Image inside Mask
        if (this.revealImg.complete) {
            this.drawImageCover(this.revealImg);
        }

        // 6. Optional: Stroke for definition
        // this.ctx.lineWidth = 2;
        // this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        // this.ctx.stroke();

        this.ctx.restore();

        requestAnimationFrame((t) => this.render(t));
    }
}

// Wait for images to be accessible
window.onload = () => {
    new FluidReveal();
};
