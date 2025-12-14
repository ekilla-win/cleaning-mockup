// SparkleClean Pro Services - Main JavaScript
class SparkleCleanApp {
    constructor() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        this.setupDarkMode();
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupServiceCalculator();
        this.setupContactForm();
        this.setupTestimonialCarousel();
        this.setupParticleBackground();
    }

    // Dark Mode Functionality
    setupDarkMode() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeIcon = document.getElementById('darkModeIcon');
        
        if (this.darkMode) {
            document.documentElement.classList.add('dark');
            darkModeIcon.innerHTML = '☀️';
        }

        darkModeToggle?.addEventListener('click', () => {
            this.darkMode = !this.darkMode;
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', this.darkMode);
            
            darkModeIcon.innerHTML = this.darkMode ? '☀️' : '🌙';
            
            // Smooth transition
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }

    // Navigation Active States
    setupNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('text-emerald-600', 'font-semibold');
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuToggle?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Service Pricing Calculator
    setupServiceCalculator() {
        const serviceType = document.getElementById('serviceType');
        const propertySize = document.getElementById('propertySize');
        const serviceFrequency = document.getElementById('serviceFrequency');
        const priceDisplay = document.getElementById('priceDisplay');
        const priceChart = document.getElementById('priceChart');

        if (!serviceType || !propertySize || !serviceFrequency) return;

        const calculatePrice = () => {
            const service = serviceType.value;
            const size = propertySize.value;
            const frequency = serviceFrequency.value;

            // Base prices
            const basePrices = {
                basic: { studio: 80, '1br': 100, '2br': 130, '3br': 160, office: 200 },
                deep: { studio: 150, '1br': 200, '2br': 260, '3br': 320, office: 400 },
                movein: { studio: 180, '1br': 240, '2br': 300, '3br': 380, office: 450 },
                commercial: { studio: 300, '1br': 400, '2br': 500, '3br': 600, office: 800 }
            };

            const frequencyMultiplier = {
                once: 1,
                weekly: 0.85,
                biweekly: 0.9,
                monthly: 0.95
            };

            const basePrice = basePrices[service]?.[size] || 0;
            const multiplier = frequencyMultiplier[frequency] || 1;
            const finalPrice = Math.round(basePrice * multiplier);

            if (priceDisplay) {
                priceDisplay.innerHTML = `
                    <div class="text-center">
                        <div class="text-4xl font-bold text-emerald-600 dark:text-emerald-400">$${finalPrice}</div>
                        <div class="text-gray-600 dark:text-gray-400">per cleaning</div>
                        <div class="text-sm text-gray-500 dark:text-gray-500 mt-2">
                            ${frequency === 'once' ? 'One-time service' : `Save ${Math.round((1 - multiplier) * 100)}% with ${frequency} service`}
                        </div>
                    </div>
                `;
            }

            this.updatePriceChart(service, size, frequency, finalPrice);
        };

        [serviceType, propertySize, serviceFrequency].forEach(element => {
            element?.addEventListener('change', calculatePrice);
        });

        calculatePrice(); // Initial calculation
    }

    updatePriceChart(service, size, frequency, price) {
        const chartContainer = document.getElementById('priceChart');
        if (!chartContainer) return;

        // Simple bar chart visualization
        const frequencies = ['once', 'weekly', 'biweekly', 'monthly'];
        const multipliers = { once: 1, weekly: 0.85, biweekly: 0.9, monthly: 0.95 };

        let chartHTML = '<div class="flex justify-around items-end h-32 mt-4">';
        
        frequencies.forEach(freq => {
            const freqPrice = Math.round(price / multipliers[frequency] * multipliers[freq]);
            const height = (freqPrice / 200) * 100; // Scale to max 200
            const isActive = freq === frequency;
            
            chartHTML += `
                <div class="flex flex-col items-center">
                    <div class="text-xs font-semibold ${isActive ? 'text-emerald-600' : 'text-gray-500'}">$${freqPrice}</div>
                    <div class="w-8 ${isActive ? 'bg-emerald-500' : 'bg-gray-300'} rounded-t" style="height: ${height}%"></div>
                    <div class="text-xs mt-1 ${isActive ? 'text-emerald-600 font-semibold' : 'text-gray-500'}">${freq}</div>
                </div>
            `;
        });
        
        chartHTML += '</div>';
        chartContainer.innerHTML = chartHTML;
    }

    // Contact Form
    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (this.validateContactForm(data)) {
                this.showFormSuccess();
            } else {
                this.showFormError('Please fill in all required fields correctly.');
            }
        });
    }

    validateContactForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        
        return data.name?.trim().length > 0 &&
               emailRegex.test(data.email) &&
               phoneRegex.test(data.phone) &&
               data.service?.trim().length > 0 &&
               data.message?.trim().length > 10;
    }

    showFormSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'fixed top-20 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        successMessage.innerHTML = `
            <div class="flex items-center">
                <span class="mr-2">✅</span>
                <span>Thank you! We'll contact you soon.</span>
            </div>
        `;
        
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            successMessage.style.transform = 'translateX(full)';
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 300);
        }, 3000);
    }

    showFormError(message) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'fixed top-20 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        errorMessage.innerHTML = `
            <div class="flex items-center">
                <span class="mr-2">❌</span>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(errorMessage);
        
        setTimeout(() => {
            errorMessage.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            errorMessage.style.transform = 'translateX(full)';
            setTimeout(() => {
                document.body.removeChild(errorMessage);
            }, 300);
        }, 3000);
    }

    // Testimonial Carousel
    setupTestimonialCarousel() {
        const carousel = document.getElementById('testimonialCarousel');
        if (!carousel) return;

        const testimonials = [
            {
                name: "Sarah Johnson",
                rating: 5,
                text: "SparkleClean transformed my home! The attention to detail is incredible.",
                location: "Downtown"
            },
            {
                name: "Mike Chen",
                rating: 5,
                text: "Professional, reliable, and thorough. Highly recommend their services!",
                location: "Westside"
            },
            {
                name: "Emily Rodriguez",
                rating: 5,
                text: "Best cleaning service I've ever used. My house has never looked better!",
                location: "East District"
            }
        ];

        let currentIndex = 0;

        const renderTestimonial = (testimonial) => {
            return `
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="flex text-yellow-400">
                            ${'★'.repeat(testimonial.rating)}
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 mb-4 italic">"${testimonial.text}"</p>
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                            ${testimonial.name.charAt(0)}
                        </div>
                        <div class="ml-4">
                            <div class="font-semibold text-gray-900 dark:text-white">${testimonial.name}</div>
                            <div class="text-gray-600 dark:text-gray-400 text-sm">${testimonial.location}</div>
                        </div>
                    </div>
                </div>
            `;
        };

        const updateCarousel = () => {
            carousel.innerHTML = renderTestimonial(testimonials[currentIndex]);
            
            // Auto-advance carousel
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                updateCarousel();
            }, 5000);
        };

        updateCarousel();
    }

    // Particle Background Effect
    setupParticleBackground() {
        const particleContainer = document.getElementById('particleContainer');
        if (!particleContainer) return;

        // Create floating cleaning icons
        const icons = ['🧹', '✨', '🧽', '🧼', '🧴'];
        const particles = [];

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute text-2xl opacity-20 pointer-events-none';
            particle.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
            
            particleContainer.appendChild(particle);
            particles.push(particle);
        }

        // Animate particles
        const animateParticles = () => {
            particles.forEach(particle => {
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                particle.style.transition = 'all 20s linear';
                particle.style.left = x + '%';
                particle.style.top = y + '%';
            });
        };

        animateParticles();
        setInterval(animateParticles, 20000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SparkleCleanApp();
});

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add scroll-to-top functionality
window.addEventListener('scroll', () => {
    const scrollTop = document.getElementById('scrollTop');
    if (scrollTop) {
        if (window.pageYOffset > 300) {
            scrollTop.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollTop.classList.add('opacity-0', 'pointer-events-none');
        }
    }
});

// Service filter functionality
function filterServices(category) {
    const services = document.querySelectorAll('.service-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('bg-emerald-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    event.target.classList.remove('bg-gray-200', 'text-gray-700');
    event.target.classList.add('bg-emerald-600', 'text-white');
    
    // Filter services
    services.forEach(service => {
        if (category === 'all' || service.dataset.category === category) {
            service.style.display = 'block';
            service.classList.remove('opacity-0', 'scale-95');
            service.classList.add('opacity-100', 'scale-100');
        } else {
            service.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                if (service.classList.contains('opacity-0')) {
                    service.style.display = 'none';
                }
            }, 300);
        }
    });
}