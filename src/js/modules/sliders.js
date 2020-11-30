export function Slider(slider) {
    
    if( !( slider instanceof Element ) ) {
      throw new error('No slider passed in');
    }
  
    this.slider = slider;
    this.slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');
    this.dots = slider.querySelector('.dots');
	if(this.dots) {
		this.createDots();
	}
    this.startSlider();
    this.applyClasses();
  
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
}
  
  
Slider.prototype.startSlider = function() {
	this.current = this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.PreviousElementSibling || this.slides.lastElementChild;
	this.next = this.current.nextElementSibling || this.slides.firstElementChild;
	
	if(this.dots) {
		this.currentDot = this.slider.querySelector('.current-dot') || this.dots.firstElementChild;
		this.prevDot = this.currentDot.PreviousElementSibling || this.dots.lastElementChild;
		this.nextDot = this.currentDot.nextElementSibling || this.dots.firstElementChild;
	}
}
  
Slider.prototype.applyClasses = function() {
    this.prev.classList.add('prev');
    this.current.classList.add('current');
	this.next.classList.add('next');

	if(this.dots) {
		this.prevDot.classList.add('prev-dot');
		this.currentDot.classList.add('current-dot');
		this.nextDot.classList.add('next-dot');
	}
}

Slider.prototype.createDots = function() {
	const slide = this.slides.querySelectorAll('.slide');
	slide.forEach((el) => {
		this.dots.innerHTML += 
		`<li class="dot ${el.classList.contains("current") ? 'current-dot' : ''}"></li>`;
	});
}

Slider.prototype.move = function(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
  
	if(this.dots) {
		const dotsToRemove = ['prev-dot', 'current-dot', 'next-dot'];
		this.prevDot.classList.remove(...dotsToRemove);
		this.currentDot.classList.remove(...dotsToRemove);
		this.nextDot.classList.remove(...dotsToRemove);
	}

    if( direction === 'back' ) {
		[this.prev, this.current, this.next] = [
			this.prev.previousElementSibling || this.slides.lastElementChild, 
			this.prev, 
			this.current
		];
		if(this.dots) {
			[this.prevDot, this.currentDot, this.nextDot] = [
				this.prevDot.previousElementSibling || this.dots.lastElementChild, 
				this.prevDot, 
				this.currentDot
			];
		}
    }
    else {
		[this.prev, this.current, this.next] = [
			this.current, 
			this.next, 
			this.next.nextElementSibling || this.slides.firstElementChild
		];
		if(this.dots) {
			[this.prevDot, this.currentDot, this.nextDot] = [
				this.currentDot, 
				this.nextDot, 
				this.nextDot.nextElementSibling || this.dots.firstElementChild
			];
		}
    }
  
    this.applyClasses();
}