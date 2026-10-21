/**
 * Hotel Waidhan BnB - Master Application Logic
 * Mobile-First Navigation | Dynamic Inventory | Booking Engine | AI Chatbot
 */

// 1. Room Inventory Database with Live Availability & Features
const ROOM_INVENTORY = [
  {
    id: 'dorm-bed',
    title: 'Dormitory Single Bed (Hygienic Shared)',
    category: 'dormitory',
    price: 349,
    priceUnit: '/ night',
    totalCapacity: 8,
    availableUnits: 3,
    status: 'low', // 'available' | 'low' | 'soldout'
    statusText: '🟠 Only 3 Beds Left Today',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    description: 'Spotless, air-ventilated shared dormitory equipped with personal reading lights, charging stations, and lockable steel wardrobe.',
    features: [
      { icon: 'fas fa-wind', text: 'High-Speed Fan Ventilation' },
      { icon: 'fas fa-plug', text: 'Personal Charging Socket' },
      { icon: 'fas fa-wifi', text: '50 Mbps Free Wi-Fi' },
      { icon: 'fas fa-lock', text: 'Personal Steel Locker' },
      { icon: 'fas fa-shower', text: 'Hot Water Geyser (24/7)' },
      { icon: 'fas fa-bolt', text: '100% DG Power Backup' }
    ],
    bedType: '1 Single Bunk Bed',
    occupancy: '1 Adult'
  },
  {
    id: 'budget-non-ac',
    title: 'Standard Non-AC Economy Room',
    category: 'budget',
    price: 599,
    priceUnit: '/ night',
    totalCapacity: 6,
    availableUnits: 2,
    status: 'available',
    statusText: '🟢 2 Rooms Available',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    description: 'Comfortable private room designed for budget travelers and contractors visiting Singrauli. Spotless linen and attached bathroom.',
    features: [
      { icon: 'fas fa-fan', text: 'High-Velocity Ceiling Fan' },
      { icon: 'fas fa-bed', text: '1 Queen Size Bed' },
      { icon: 'fas fa-bath', text: 'Attached Private Bathroom' },
      { icon: 'fas fa-wifi', text: 'Free High-Speed Wi-Fi' },
      { icon: 'fas fa-tv', text: 'Cable TV with News Channels' },
      { icon: 'fas fa-bolt', text: '24/7 Power Backup' }
    ],
    bedType: '1 Queen Bed',
    occupancy: '2 Adults'
  },
  {
    id: 'cooler-deluxe',
    title: 'Deluxe Air-Cooler Room',
    category: 'budget',
    price: 849,
    priceUnit: '/ night',
    totalCapacity: 5,
    availableUnits: 1,
    status: 'low',
    statusText: '🟠 Only 1 Room Left!',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    description: 'Equipped with a powerful heavy-duty air cooler, extra comfortable mattress, and work table for travelers needing economical cooling.',
    features: [
      { icon: 'fas fa-wind', text: 'Heavy Desert Air Cooler' },
      { icon: 'fas fa-bed', text: '1 King Size Comfort Bed' },
      { icon: 'fas fa-tv', text: '32" HD LED TV' },
      { icon: 'fas fa-wifi', text: 'High-Speed Wi-Fi' },
      { icon: 'fas fa-hot-tub', text: 'Attached Bath + Geyser' },
      { icon: 'fas fa-bell-concierge', text: 'Room Service' }
    ],
    bedType: '1 King Bed',
    occupancy: '2 Adults'
  },
  {
    id: 'executive-ac',
    title: 'Executive AC Deluxe Room',
    category: 'ac',
    price: 1299,
    priceUnit: '/ night',
    totalCapacity: 8,
    availableUnits: 4,
    status: 'available',
    statusText: '🟢 4 Rooms Available',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    description: 'Our most popular room for corporate visitors to NTPC Vindhyanagar and NCL. Premium spring mattress, silent split AC, and modern aesthetics.',
    features: [
      { icon: 'fas fa-snowflake', text: 'Split Air Conditioner' },
      { icon: 'fas fa-bed', text: 'King Bed + Orthopedic Mattress' },
      { icon: 'fas fa-tv', text: '43" Smart TV (OTT Ready)' },
      { icon: 'fas fa-wifi', text: '100 Mbps Dedicated Wi-Fi' },
      { icon: 'fas fa-mug-hot', text: 'Electric Kettle & Tea Setup' },
      { icon: 'fas fa-file-invoice', text: 'Official GST Invoice Included' }
    ],
    bedType: '1 King Bed',
    occupancy: '2 Adults + 1 Child'
  },
  {
    id: 'vip-suite',
    title: 'VIP Presidential Suite Room',
    category: 'ac',
    price: 1999,
    priceUnit: '/ night',
    totalCapacity: 3,
    availableUnits: 0,
    status: 'soldout',
    statusText: '🔴 Sold Out for Today',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    description: 'Spacious luxury suite with separate sitting lounge, plush sofa set, dual split ACs, and premium amenities for plant heads and VIP delegates.',
    features: [
      { icon: 'fas fa-crown', text: 'Luxury Living Lounge' },
      { icon: 'fas fa-snowflake', text: 'Dual Split Inverter ACs' },
      { icon: 'fas fa-tv', text: '55" 4K Smart TV' },
      { icon: 'fas fa-laptop', text: 'Executive Workstation Desk' },
      { icon: 'fas fa-utensils', text: 'Complimentary Hot Breakfast' },
      { icon: 'fas fa-shield-halved', text: 'VIP Priority Room Service' }
    ],
    bedType: '1 King Bed + Lounge Sofa',
    occupancy: '2 Adults + 2 Children'
  },
  {
    id: 'monthly-pg',
    title: 'Monthly Paying Guest (PG) Room',
    category: 'pg',
    price: 5499,
    priceUnit: '/ month',
    totalCapacity: 10,
    availableUnits: 3,
    status: 'available',
    statusText: '🟢 3 Monthly Slots Available',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    description: 'Long-stay furnished accommodation for student coaching, NTPC/NCL contract engineers, and industrial staff. Optional homestyle meal package.',
    features: [
      { icon: 'fas fa-house-user', text: 'Fully Furnished + Wardrobe' },
      { icon: 'fas fa-utensils', text: 'Homestyle Meals (Optional)' },
      { icon: 'fas fa-wifi', text: 'Unlimited Wi-Fi 24/7' },
      { icon: 'fas fa-broom', text: 'Daily Room Housekeeping' },
      { icon: 'fas fa-shirt', text: 'Laundry Machine Access' },
      { icon: 'fas fa-shield', text: '24/7 CCTV & Security Guard' }
    ],
    bedType: '1 Single / Twin Sharing Bed',
    occupancy: '1 Person / Bed'
  }
];

// 2. DOM Elements & State
let currentFilter = 'all';
let selectedRoomForBooking = ROOM_INVENTORY[0];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  initHeroVideo();
  initDatePickers();
  renderRooms(ROOM_INVENTORY);
  initFilterButtons();
  initMobileDrawer();
  initBottomNavScrollSpy();
  initAiChatbot();
  initBookingModal();
  initSearchAvailabilityEngine();
  initLightbox();
  initReceptionDesk();
});

// ============================================================================
// THEME SWITCHER SYSTEM (Light, Dark, System Preference)
// ============================================================================
function initThemeSystem() {
  const dropdownWrap = document.getElementById('theme-dropdown-wrap');
  const btnDropdown = document.getElementById('btn-theme-dropdown');
  const headerIcon = document.getElementById('header-theme-icon');
  const headerText = document.getElementById('header-theme-text');
  const desktopMenuItems = document.querySelectorAll('.theme-menu-item');
  const drawerPills = document.querySelectorAll('.drawer-theme-pill');
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  // Stored preference ('light' | 'dark' | 'system')
  let currentPref = localStorage.getItem('theme_preference') || 'system';

  function applyTheme(pref, persist = true) {
    currentPref = pref;
    if (persist) {
      try {
        localStorage.setItem('theme_preference', pref);
      } catch (e) {
        console.warn('LocalStorage not accessible for theme:', e);
      }
    }

    // Apply data-theme attribute
    document.documentElement.setAttribute('data-theme', pref);

    // Update <meta name="color-scheme">
    if (metaColorScheme) {
      metaColorScheme.content = pref === 'system' ? 'light dark' : pref;
    }

    // Update Desktop Header Dropdown Trigger Icon & Label
    if (headerIcon && headerText) {
      if (pref === 'light') {
        headerIcon.className = 'fas fa-sun';
        headerIcon.style.color = '#f59e0b';
        headerText.textContent = 'Light';
      } else if (pref === 'dark') {
        headerIcon.className = 'fas fa-moon';
        headerIcon.style.color = '#38bdf8';
        headerText.textContent = 'Dark';
      } else {
        headerIcon.className = 'fas fa-laptop';
        headerIcon.style.color = 'var(--accent)';
        headerText.textContent = 'System';
      }
    }

    // Update active classes on Desktop Menu Items
    desktopMenuItems.forEach(item => {
      const itemTheme = item.getAttribute('data-theme');
      if (itemTheme === pref) {
        item.classList.add('active');
        item.setAttribute('aria-selected', 'true');
      } else {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      }
    });

    // Update active classes on Mobile Drawer Pills
    drawerPills.forEach(pill => {
      const pillTheme = pill.getAttribute('data-theme');
      if (pillTheme === pref) {
        pill.classList.add('active');
        pill.setAttribute('aria-pressed', 'true');
      } else {
        pill.classList.remove('active');
        pill.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Toggle desktop dropdown
  if (btnDropdown && dropdownWrap) {
    btnDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownWrap.classList.toggle('open');
      btnDropdown.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dropdownWrap.contains(e.target)) {
        dropdownWrap.classList.remove('open');
        btnDropdown.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdownWrap.classList.contains('open')) {
        dropdownWrap.classList.remove('open');
        btnDropdown.setAttribute('aria-expanded', 'false');
        btnDropdown.focus();
      }
    });
  }

  // Desktop Menu Item Click Handler
  desktopMenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosen = item.getAttribute('data-theme');
      if (chosen) {
        applyTheme(chosen, true);
        if (dropdownWrap) {
          dropdownWrap.classList.remove('open');
          if (btnDropdown) btnDropdown.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Mobile Drawer Pill Click Handler
  drawerPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const chosen = pill.getAttribute('data-theme');
      if (chosen) {
        applyTheme(chosen, true);
      }
    });
  });

  // Listen to OS System Color Scheme changes in real time
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => {
    const currentStored = localStorage.getItem('theme_preference') || 'system';
    if (currentStored === 'system') {
      applyTheme('system', false);
    }
  });

  // Run on initial load
  applyTheme(currentPref, false);
}

// ============================================================================
// HERO FULLSCREEN HD VIDEO BACKGROUND SYSTEM & CONTROLS
// ============================================================================
function initHeroVideo() {
  const video = document.getElementById('hero-bg-video');
  const toggleBtn = document.getElementById('btn-toggle-hero-video');
  const toggleIcon = document.getElementById('hero-video-icon');
  const toggleText = document.getElementById('hero-video-text');

  if (!video) return;

  // Ensure autoplay with fallback handling
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay with sound or battery saver may pause; ensure muted
      video.muted = true;
      video.play().catch(e => console.log('Autoplay deferred:', e));
    });
  }

  if (toggleBtn && toggleIcon && toggleText) {
    toggleBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        toggleIcon.className = 'fas fa-pause';
        toggleText.textContent = 'Live HD Tour';
        toggleBtn.setAttribute('aria-label', 'Pause hotel video background');
      } else {
        video.pause();
        toggleIcon.className = 'fas fa-play';
        toggleText.textContent = 'Play Video';
        toggleBtn.setAttribute('aria-label', 'Play hotel video background');
      }
    });

    // Update button if video state changes externally
    video.addEventListener('play', () => {
      toggleIcon.className = 'fas fa-pause';
      toggleText.textContent = 'Live HD Tour';
    });
    video.addEventListener('pause', () => {
      toggleIcon.className = 'fas fa-play';
      toggleText.textContent = 'Play Video';
    });
  }
}

// Setup Default Dates (Today & Tomorrow)
function initDatePickers() {
  const checkinInput = document.getElementById('search-checkin');
  const checkoutInput = document.getElementById('search-checkout');
  const modalCheckin = document.getElementById('modal-checkin');
  const modalCheckout = document.getElementById('modal-checkout');

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (d) => d.toISOString().split('T')[0];

  if (checkinInput) {
    checkinInput.value = formatDate(today);
    checkinInput.min = formatDate(today);
  }
  if (checkoutInput) {
    checkoutInput.value = formatDate(tomorrow);
    checkoutInput.min = formatDate(tomorrow);
  }
  if (modalCheckin) {
    modalCheckin.value = formatDate(today);
    modalCheckin.min = formatDate(today);
  }
  if (modalCheckout) {
    modalCheckout.value = formatDate(tomorrow);
    modalCheckout.min = formatDate(tomorrow);
  }
}

// 3. Render Room Cards
function renderRooms(rooms) {
  const container = document.getElementById('rooms-grid-container');
  if (!container) return;

  container.innerHTML = '';

  if (rooms.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fas fa-bed" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--accent);"></i>
        <h3>No rooms found matching this category</h3>
        <p>Please select another category or contact reception directly.</p>
      </div>
    `;
    return;
  }

  rooms.forEach(room => {
    const card = document.createElement('div');
    card.className = 'room-card';
    card.innerHTML = `
      <div class="room-thumb-wrap">
        <img src="${room.image}" alt="${room.title}" class="room-img" loading="lazy">
        <div class="room-badge-stack">
          <span class="stock-badge ${room.status}">
            <i class="fas fa-circle" style="font-size: 6px;"></i> ${room.statusText}
          </span>
          <span class="category-badge">${room.category.toUpperCase()}</span>
        </div>
        <div class="room-price-tag">
          <div class="room-price">₹${room.price.toLocaleString('en-IN')}</div>
          <div class="room-price-sub">${room.priceUnit}</div>
        </div>
      </div>
      <div class="room-content">
        <h3 class="room-title">${room.title}</h3>
        <p class="room-description">${room.description}</p>
        
        <div class="room-features">
          ${room.features.map(f => `
            <div class="feature-item">
              <i class="${f.icon}"></i>
              <span>${f.text}</span>
            </div>
          `).join('')}
        </div>

        <div class="room-card-actions">
          ${room.status === 'soldout' ? `
            <button class="btn-primary" style="opacity: 0.6; cursor: not-allowed; flex: 1;" disabled>
              <i class="fas fa-ban"></i> Sold Out Today
            </button>
          ` : `
            <button class="btn-primary btn-book-room" data-room-id="${room.id}">
              <i class="fas fa-calendar-check"></i> Book Now
            </button>
          `}
          <button class="btn-room-details" data-room-id="${room.id}">
            <i class="fas fa-info-circle"></i> Details
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Bind booking button clicks
  document.querySelectorAll('.btn-book-room').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roomId = e.currentTarget.getAttribute('data-room-id');
      const room = ROOM_INVENTORY.find(r => r.id === roomId);
      if (room) openBookingModal(room);
    });
  });

  document.querySelectorAll('.btn-room-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const roomId = e.currentTarget.getAttribute('data-room-id');
      const room = ROOM_INVENTORY.find(r => r.id === roomId);
      if (room) openBookingModal(room);
    });
  });
}

// 4. Room Category Filter Handling
function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      currentFilter = category;

      if (category === 'all') {
        renderRooms(ROOM_INVENTORY);
      } else {
        const filtered = ROOM_INVENTORY.filter(r => r.category === category);
        renderRooms(filtered);
      }
    });
  });
}

// 5. Mobile Drawer Navigation Controller (Top Right Menu Dropdown / Slide-in)
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('btn-hamburger');
  const drawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');

  function openDrawer() {
    drawerBackdrop.classList.add('open');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerBackdrop.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (drawerBackdrop.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) closeDrawer();
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerBackdrop.classList.contains('open')) {
      closeDrawer();
    }
  });
}

// 6. Mobile Bottom Navigation Bar & ScrollSpy
function initBottomNavScrollSpy() {
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        bottomNavItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  bottomNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const targetId = item.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// 7. Booking Search Availability Engine
function initSearchAvailabilityEngine() {
  const searchBtn = document.getElementById('btn-search-availability');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const checkin = document.getElementById('search-checkin').value;
    const checkout = document.getElementById('search-checkout').value;
    const categorySelect = document.getElementById('search-category').value;

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (checkoutDate <= checkinDate) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    // Scroll smoothly to rooms section
    const roomsSection = document.getElementById('rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Filter by selected category if specified
    if (categorySelect && categorySelect !== 'all') {
      const filtered = ROOM_INVENTORY.filter(r => r.category === categorySelect);
      renderRooms(filtered);
      
      // Update UI buttons
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === categorySelect) {
          btn.classList.add('active');
        }
      });
    } else {
      renderRooms(ROOM_INVENTORY);
    }
  });
}

// 8. Booking Modal & Calculation Engine
function initBookingModal() {
  const modalBackdrop = document.getElementById('booking-modal-backdrop');
  const modalCloseBtn = document.getElementById('booking-modal-close');
  const roomSelect = document.getElementById('modal-room-select');
  const checkinInput = document.getElementById('modal-checkin');
  const checkoutInput = document.getElementById('modal-checkout');
  const confirmWhatsAppBtn = document.getElementById('btn-confirm-whatsapp');
  const confirmDirectBtn = document.getElementById('btn-confirm-direct');

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Populate room options in modal dropdown
  if (roomSelect) {
    roomSelect.innerHTML = ROOM_INVENTORY.map(r => `
      <option value="${r.id}">${r.title} — ₹${r.price}${r.priceUnit}</option>
    `).join('');

    roomSelect.addEventListener('change', () => {
      const selected = ROOM_INVENTORY.find(r => r.id === roomSelect.value);
      if (selected) {
        selectedRoomForBooking = selected;
        updateModalCalculations();
      }
    });
  }

  if (checkinInput && checkoutInput) {
    checkinInput.addEventListener('change', updateModalCalculations);
    checkoutInput.addEventListener('change', updateModalCalculations);
  }

  // Action A: WhatsApp Instant Booking
  if (confirmWhatsAppBtn) {
    confirmWhatsAppBtn.addEventListener('click', () => {
      const guestName = document.getElementById('modal-guest-name').value || 'Guest';
      const guestPhone = document.getElementById('modal-guest-phone').value || '';
      const checkin = document.getElementById('modal-checkin').value;
      const checkout = document.getElementById('modal-checkout').value;
      const guestsCount = document.getElementById('modal-guests-count').value || '1';

      if (!guestPhone) {
        alert('Please enter your contact mobile number.');
        return;
      }

      const nights = calculateNights(checkin, checkout);
      const totalAmount = (selectedRoomForBooking.price * nights);

      const bookingId = 'WBNB-' + Math.floor(100000 + Math.random() * 900000);

      // Save to Local Booking Storage
      saveBookingToStorage({
        id: bookingId,
        guestName,
        guestPhone,
        room: selectedRoomForBooking.title,
        checkin,
        checkout,
        nights,
        amount: totalAmount,
        status: 'whatsapp',
        timestamp: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      });

      const message = `*HOTEL WAIDHAN BNB - BOOKING REQUEST*%0A%0A` +
        `🆔 *Booking Ref:* ${bookingId}%0A` +
        `👤 *Guest Name:* ${encodeURIComponent(guestName)}%0A` +
        `📱 *Contact Phone:* ${encodeURIComponent(guestPhone)}%0A` +
        `🛏️ *Room Type:* ${encodeURIComponent(selectedRoomForBooking.title)}%0A` +
        `📅 *Check-In:* ${checkin}%0A` +
        `📅 *Check-Out:* ${checkout} (${nights} Night(s))%0A` +
        `👥 *Guests:* ${guestsCount}%0A` +
        `💰 *Estimated Tariff:* ₹${totalAmount.toLocaleString('en-IN')}%0A%0A` +
        `Please confirm availability and share payment/booking confirmation details.`;

      const whatsappUrl = `https://wa.me/917879028316?text=${message}`;
      window.open(whatsappUrl, '_blank');
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
      alert(`✅ Booking request logged with Ref ID: ${bookingId}. Opening WhatsApp to send details directly to Hotel Waidhan BnB.`);
    });
  }

  // Action B: Instant Voucher Generation
  if (confirmDirectBtn) {
    confirmDirectBtn.addEventListener('click', () => {
      const guestName = document.getElementById('modal-guest-name').value;
      const guestPhone = document.getElementById('modal-guest-phone').value;
      const checkin = document.getElementById('modal-checkin').value;
      const checkout = document.getElementById('modal-checkout').value;

      if (!guestName || !guestPhone) {
        alert('Please provide your name and contact phone number.');
        return;
      }

      const nights = calculateNights(checkin, checkout);
      const totalAmount = (selectedRoomForBooking.price * nights);
      const bookingId = 'WBNB-' + Math.floor(100000 + Math.random() * 900000);

      // Save to Local Booking Storage
      saveBookingToStorage({
        id: bookingId,
        guestName,
        guestPhone,
        room: selectedRoomForBooking.title,
        checkin,
        checkout,
        nights,
        amount: totalAmount,
        status: 'confirmed',
        timestamp: new Date().toLocaleDateString('en-IN') + ' ' + new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
      });

      alert(`🎉 RESERVATION CONFIRMED!\n\nBooking ID: ${bookingId}\nGuest: ${guestName}\nRoom: ${selectedRoomForBooking.title}\nCheck-in: ${checkin} to ${checkout} (${nights} nights)\nTotal: ₹${totalAmount.toLocaleString('en-IN')}\nPayment: Pay upon check-in at reception.\n\nYour reservation has been logged into the Reception Desk!`);
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
}

function openBookingModal(room) {
  selectedRoomForBooking = room;
  const modalBackdrop = document.getElementById('booking-modal-backdrop');
  const roomSelect = document.getElementById('modal-room-select');

  if (roomSelect) {
    roomSelect.value = room.id;
  }

  // Pre-fill user data if customer is logged in
  if (typeof getCurrentUser === 'function') {
    const user = getCurrentUser();
    if (user && typeof autoPopulateBookingModal === 'function') {
      autoPopulateBookingModal(user);
    }
  }

  updateModalCalculations();
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function calculateNights(checkinStr, checkoutStr) {
  const d1 = new Date(checkinStr);
  const d2 = new Date(checkoutStr);
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

function updateModalCalculations() {
  const checkin = document.getElementById('modal-checkin').value;
  const checkout = document.getElementById('modal-checkout').value;
  const nights = calculateNights(checkin, checkout);

  const basePrice = selectedRoomForBooking.price * nights;
  const gst = selectedRoomForBooking.price >= 1000 ? Math.round(basePrice * 0.12) : 0;
  const grandTotal = basePrice + gst;

  const nightsDisplay = document.getElementById('summary-nights');
  const basePriceDisplay = document.getElementById('summary-base-price');
  const gstDisplay = document.getElementById('summary-gst');
  const totalDisplay = document.getElementById('summary-total');

  if (nightsDisplay) nightsDisplay.textContent = `${nights} Night(s)`;
  if (basePriceDisplay) basePriceDisplay.textContent = `₹${basePrice.toLocaleString('en-IN')}`;
  if (gstDisplay) gstDisplay.textContent = `₹${gst.toLocaleString('en-IN')}`;
  if (totalDisplay) totalDisplay.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

// 9. Staff Concierge & Dual-Mode Chatbot (Pooja Sharma - Front Desk)
function initAiChatbot() {
  const openChatBtn = document.getElementById('btn-open-ai-chat');
  const desktopAiBtn = document.getElementById('btn-desktop-ai-chat');
  const closeChatBtn = document.getElementById('btn-close-ai-chat');
  const chatDialog = document.getElementById('ai-chat-dialog');
  const chatBody = document.getElementById('ai-chat-body');
  const chatInput = document.getElementById('ai-chat-input');
  const sendChatBtn = document.getElementById('btn-send-chat');

  // AI Settings Modal Elements
  const settingsBtn = document.getElementById('btn-chat-api-settings');
  const settingsModal = document.getElementById('chat-settings-modal-backdrop');
  const closeSettingsBtn = document.getElementById('btn-close-chat-settings');
  const providerSelect = document.getElementById('ai-provider-select');
  const apiKeyInput = document.getElementById('ai-api-key-input');
  const modelInput = document.getElementById('ai-model-input');
  const toggleKeyVisibilityBtn = document.getElementById('btn-toggle-key-visibility');
  const testApiBtn = document.getElementById('btn-test-api-key');
  const saveSettingsBtn = document.getElementById('btn-save-chat-settings');
  const settingsStatusMsg = document.getElementById('settings-status-message');
  const modePill = document.getElementById('chat-banner-mode-pill');
  const modeIndicator = document.getElementById('chat-mode-indicator');

  // Load Persisted Settings
  function getChatConfig() {
    return {
      provider: localStorage.getItem('waidhan_ai_provider') || 'offline',
      apiKey: localStorage.getItem('waidhan_ai_api_key') || '',
      model: localStorage.getItem('waidhan_ai_model') || ''
    };
  }

  function saveChatConfig(provider, apiKey, model) {
    localStorage.setItem('waidhan_ai_provider', provider);
    localStorage.setItem('waidhan_ai_api_key', apiKey.trim());
    localStorage.setItem('waidhan_ai_model', model.trim());
    updateModeIndicators();
  }

  function updateModeIndicators() {
    const config = getChatConfig();
    if (config.provider === 'gemini' && config.apiKey) {
      if (modePill) modePill.textContent = 'Gemini AI Online';
      if (modeIndicator) modeIndicator.innerHTML = '<i class="fas fa-sparkles"></i> Gemini AI Active';
    } else if (config.provider === 'openrouter' && config.apiKey) {
      if (modePill) modePill.textContent = 'OpenRouter AI Online';
      if (modeIndicator) modeIndicator.innerHTML = '<i class="fas fa-sparkles"></i> OpenRouter AI Active';
    } else {
      if (modePill) modePill.textContent = 'Smart Offline DB Active';
      if (modeIndicator) modeIndicator.innerHTML = '<i class="fas fa-bolt"></i> Instant Reply (Offline DB)';
    }
  }

  // Populate settings modal from storage
  function populateSettingsForm() {
    const config = getChatConfig();
    if (providerSelect) providerSelect.value = config.provider;
    if (apiKeyInput) apiKeyInput.value = config.apiKey;
    if (modelInput) modelInput.value = config.model;
    updateKeyFieldVisibility();
    if (settingsStatusMsg) {
      settingsStatusMsg.style.display = 'none';
      settingsStatusMsg.textContent = '';
      settingsStatusMsg.className = 'settings-status-msg';
    }
  }

  function updateKeyFieldVisibility() {
    const prov = providerSelect ? providerSelect.value : 'offline';
    const keyGroup = document.getElementById('api-key-field-group');
    const modelGroup = document.getElementById('model-name-field-group');
    if (prov === 'offline') {
      if (keyGroup) keyGroup.style.opacity = '0.45';
      if (modelGroup) modelGroup.style.opacity = '0.45';
      if (apiKeyInput) apiKeyInput.placeholder = 'No API key needed for Smart Offline Mode';
    } else if (prov === 'gemini') {
      if (keyGroup) keyGroup.style.opacity = '1';
      if (modelGroup) modelGroup.style.opacity = '1';
      if (apiKeyInput) apiKeyInput.placeholder = 'Paste Google Gemini API Key (e.g. AIzaSy...)';
      if (modelInput && !modelInput.value) modelInput.placeholder = 'gemini-1.5-flash (default)';
    } else if (prov === 'openrouter') {
      if (keyGroup) keyGroup.style.opacity = '1';
      if (modelGroup) modelGroup.style.opacity = '1';
      if (apiKeyInput) apiKeyInput.placeholder = 'Paste OpenRouter Key (e.g. sk-or-v1-...)';
      if (modelInput && !modelInput.value) modelInput.placeholder = 'google/gemini-flash-1.5 (default)';
    }
  }

  if (providerSelect) {
    providerSelect.addEventListener('change', updateKeyFieldVisibility);
  }

  if (toggleKeyVisibilityBtn && apiKeyInput) {
    toggleKeyVisibilityBtn.addEventListener('click', () => {
      const isPwd = apiKeyInput.type === 'password';
      apiKeyInput.type = isPwd ? 'text' : 'password';
      toggleKeyVisibilityBtn.innerHTML = isPwd ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
    });
  }

  if (settingsBtn && settingsModal) {
    settingsBtn.addEventListener('click', () => {
      populateSettingsForm();
      settingsModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeSettingsBtn && settingsModal) {
    closeSettingsBtn.addEventListener('click', () => {
      settingsModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) {
        settingsModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener('click', () => {
      const prov = providerSelect.value;
      const key = apiKeyInput.value.trim();
      const model = modelInput.value.trim();
      saveChatConfig(prov, key, model);

      if (settingsStatusMsg) {
        settingsStatusMsg.textContent = '✅ Settings saved successfully! Pooja will use your preferred mode.';
        settingsStatusMsg.className = 'settings-status-msg success';
        settingsStatusMsg.style.display = 'block';
      }

      setTimeout(() => {
        if (settingsModal) {
          settingsModal.classList.remove('open');
          document.body.style.overflow = '';
        }
      }, 1000);
    });
  }

  // Test Connection
  if (testApiBtn) {
    testApiBtn.addEventListener('click', async () => {
      const prov = providerSelect.value;
      const key = apiKeyInput.value.trim();
      const model = modelInput.value.trim();

      if (prov === 'offline') {
        settingsStatusMsg.textContent = 'ℹ️ Smart Offline Mode is active. 100% pre-loaded verified hotel knowledge is ready!';
        settingsStatusMsg.className = 'settings-status-msg success';
        settingsStatusMsg.style.display = 'block';
        return;
      }

      if (!key) {
        settingsStatusMsg.textContent = '⚠️ Please enter an API key to test.';
        settingsStatusMsg.className = 'settings-status-msg error';
        settingsStatusMsg.style.display = 'block';
        return;
      }

      settingsStatusMsg.textContent = '⏳ Testing connection with ' + (prov === 'gemini' ? 'Google Gemini...' : 'OpenRouter...');
      settingsStatusMsg.className = 'settings-status-msg';
      settingsStatusMsg.style.display = 'block';

      try {
        let success = false;
        if (prov === 'gemini') {
          const geminiModel = model || 'gemini-1.5-flash';
          const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: 'Hello, reply with Connected' }] }]
            })
          });
          const data = await res.json();
          if (data && data.candidates && data.candidates.length > 0) {
            success = true;
          } else if (data.error) {
            throw new Error(data.error.message || 'Gemini API Error');
          }
        } else if (prov === 'openrouter') {
          const orModel = model || 'google/gemini-flash-1.5';
          const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${key}`,
              'HTTP-Referer': window.location.origin || 'https://hotelwaidhanbnb.in',
              'X-Title': 'Hotel Waidhan BnB'
            },
            body: JSON.stringify({
              model: orModel,
              messages: [{ role: 'user', content: 'Hello' }],
              max_tokens: 15
            })
          });
          const data = await res.json();
          if (data && data.choices && data.choices.length > 0) {
            success = true;
          } else if (data.error) {
            throw new Error(data.error.message || 'OpenRouter API Error');
          }
        }

        if (success) {
          settingsStatusMsg.textContent = '🎉 API connection verified! Pooja is fully equipped for real-time AI responses.';
          settingsStatusMsg.className = 'settings-status-msg success';
        } else {
          settingsStatusMsg.textContent = '⚠️ Unexpected response from API provider. Please check key & model.';
          settingsStatusMsg.className = 'settings-status-msg error';
        }
      } catch (err) {
        settingsStatusMsg.textContent = `❌ Connection test failed: ${err.message}. (Pooja will gracefully use offline support until resolved).`;
        settingsStatusMsg.className = 'settings-status-msg error';
      }
    });
  }

  // Initialize status on load
  updateModeIndicators();

  function toggleChat() {
    chatDialog.classList.toggle('open');
  }

  if (openChatBtn) openChatBtn.addEventListener('click', toggleChat);
  if (desktopAiBtn) desktopAiBtn.addEventListener('click', toggleChat);
  const floatingStaffBtn = document.getElementById('btn-floating-staff-chat');
  if (floatingStaffBtn) {
    floatingStaffBtn.addEventListener('click', () => {
      if (chatDialog) {
        toggleChat();
      } else {
        window.location.href = 'index.html#btn-desktop-ai-chat';
      }
    });
  }
  if (closeChatBtn) closeChatBtn.addEventListener('click', () => chatDialog.classList.remove('open'));

  // Quick Prompt Chips
  document.querySelectorAll('.prompt-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.textContent.replace(/^[^\w\s\u0900-\u097F]+/, '').trim();
      sendUserMessage(promptText);
    });
  });

  if (sendChatBtn && chatInput) {
    sendChatBtn.addEventListener('click', () => {
      const text = chatInput.value.trim();
      if (text) {
        sendUserMessage(text);
        chatInput.value = '';
      }
    });

    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const text = chatInput.value.trim();
        if (text) {
          sendUserMessage(text);
          chatInput.value = '';
        }
      }
    });
  }

  async function sendUserMessage(text) {
    // Append User Bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = text;
    chatBody.appendChild(userBubble);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Pooja Typing indicator simulation
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble bot';
    typingBubble.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <img src="assets/staff-pooja.jpg" alt="Pooja" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
        <span><i class="fas fa-ellipsis fa-fade"></i> Pooja is checking...</span>
      </div>
    `;
    chatBody.appendChild(typingBubble);
    chatBody.scrollTop = chatBody.scrollHeight;

    const config = getChatConfig();
    let replied = false;

    // Feature 1: Real-Time AI API (Google Gemini or OpenRouter)
    if (config.provider !== 'offline' && config.apiKey) {
      try {
        const systemPrompt = `You are Pooja Sharma, a polite, professional, and hospitable female Front Desk & Guest Relations Executive at Hotel Waidhan BnB, located at Ambedkar Chowk, Main Road, Waidhan, Singrauli, Madhya Pradesh 486886.
Hotel Details:
- 500m from Waidhan Bus Stand & Ambedkar Chowk, 10km from NTPC Vindhyanagar (15 min), 15km from NCL HQ Panjreh (20 min), 16km from Singrauli (Morwa) Railway Station.
- Official Phone Lines: Front Desk / WhatsApp: +91 7879028316; Corporate / PG: +91 9770236735; Banquet: +91 9109302812.
- Tariffs:
  * Shared Dormitory: ₹349/day (Clean bunks, personal steel locker, charging points, Wi-Fi, 24/7 hot geyser)
  * Economy Budget Non-AC Room: ₹599/night
  * Deluxe Air Cooler Room: ₹849/night
  * Executive AC Deluxe Room: ₹1,299/night (Smart TV, attached bath, geyser)
  * VIP Presidential Suite: ₹1,999/night (Balcony view, sofa lounge, mini-fridge)
  * Furnished Monthly PG Stay: ₹5,499/month (with optional mess/tiffin service)
- Amenities: 24/7 DG Power Backup, High-Speed Wi-Fi, 24/7 Hot Water Geyser, Safe Parking with CCTV, In-house restaurant 'The Zaika BnB' (7 AM to 11 PM), Shree Grand Banquet Hall (50 to 300 pax).
- Check-in: 12:00 PM, Check-out: 11:00 AM. ID proof (Aadhaar/Voter ID) required.
Tone: Warm, welcoming, respectful Indian hospitality ("Namaste!"), concise, conversational. Understand Hindi, Hinglish, and English. Keep response under 100 words. Always invite the guest to call +91 78790 28316 or book directly.`;

        let aiText = '';

        if (config.provider === 'gemini') {
          const modelName = config.model || 'gemini-1.5-flash';
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 8000);

          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${config.apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                { role: 'user', parts: [{ text: systemPrompt + '\n\nGuest Query: ' + text }] }
              ]
            }),
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          const result = await response.json();
          if (result && result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
            aiText = result.candidates[0].content.parts[0].text;
          }
        } else if (config.provider === 'openrouter') {
          const modelName = config.model || 'google/gemini-flash-1.5';
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 8000);

          const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${config.apiKey}`,
              'HTTP-Referer': window.location.origin || 'https://hotelwaidhanbnb.in',
              'X-Title': 'Hotel Waidhan BnB'
            },
            body: JSON.stringify({
              model: modelName,
              messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: text }
              ],
              max_tokens: 300
            }),
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          const result = await response.json();
          if (result && result.choices && result.choices[0]?.message?.content) {
            aiText = result.choices[0].message.content;
          }
        }

        if (aiText) {
          typingBubble.remove();
          const formatted = aiText
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>');

          const botBubble = document.createElement('div');
          botBubble.className = 'chat-bubble bot';
          botBubble.innerHTML = `
            ${formatted}
            <div class="bot-action-buttons">
              <a href="tel:7879028316" class="bot-action-btn"><i class="fas fa-phone"></i> Call Pooja</a>
              <a href="https://wa.me/917879028316?text=Hello%20Pooja%2C%20I%20am%20inquiring%20about%20Hotel%20Waidhan%20BnB." target="_blank" class="bot-action-btn"><i class="fab fa-whatsapp"></i> WhatsApp</a>
              <button class="bot-action-btn" onclick="document.getElementById('rooms').scrollIntoView({behavior:'smooth'});"><i class="fas fa-bed"></i> View Rooms</button>
            </div>
          `;
          chatBody.appendChild(botBubble);
          chatBody.scrollTop = chatBody.scrollHeight;
          replied = true;
        }
      } catch (err) {
        console.warn('Real-time AI error, seamlessly activating smart pre-loaded offline engine:', err);
      }
    }

    // Feature 2: Pre-Loaded Offline Support Engine (Always Active Fallback or Default)
    if (!replied) {
      setTimeout(() => {
        typingBubble.remove();
        const botResponse = generateStaffOfflineResponse(text.toLowerCase());
        const botBubble = document.createElement('div');
        botBubble.className = 'chat-bubble bot';
        botBubble.innerHTML = botResponse;
        chatBody.appendChild(botBubble);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 550);
    }
  }

  // Pre-Loaded Offline Support Knowledge Engine
  function generateStaffOfflineResponse(query) {
    // Phone & Contact Lines
    if (query.includes('phone') || query.includes('contact') || query.includes('number') || query.includes('call') || query.includes('mobile') || query.includes('whatsapp') || query.includes('baat')) {
      return `📞 <strong>Direct Calling Lines for Hotel Waidhan BnB:</strong><br>
      • <strong>Line 1 (Front Desk & WhatsApp):</strong> +91 78790 28316<br>
      • <strong>Line 2 (Corporate Stays & Monthly PG):</strong> +91 97702 36735<br>
      • <strong>Line 3 (Banquet & Events):</strong> +91 91093 02812<br>
      I am on duty 24 hours at the reception desk to assist you!
      <div class="bot-action-buttons">
        <a href="tel:7879028316" class="bot-action-btn"><i class="fas fa-phone"></i> Call +91 78790 28316</a>
        <a href="https://wa.me/917879028316" target="_blank" class="bot-action-btn"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>
      </div>`;
    }

    // Tariff, Prices & Rates
    if (query.includes('cheap') || query.includes('rate') || query.includes('price') || query.includes('cost') || query.includes('kiraya') || query.includes('charges') || query.includes('kitna') || query.includes('sasta')) {
      return `🛎️ <strong>Hotel Waidhan BnB Tariff Guide:</strong><br>
      • <strong>Hygienic Shared Dormitory:</strong> ₹349 / day (Bunks, locker, Wi-Fi)<br>
      • <strong>Economy Budget Non-AC:</strong> ₹599 / night<br>
      • <strong>Deluxe Air Cooler Room:</strong> ₹849 / night<br>
      • <strong>Executive AC Deluxe:</strong> ₹1,299 / night (Smart TV, geyser)<br>
      • <strong>VIP Presidential Suite:</strong> ₹1,999 / night (Sofa lounge, mini-bar)<br>
      • <strong>Furnished Monthly PG Stay:</strong> ₹5,499 / month.<br><br>
      Would you like to book one of these right now?
      <div class="bot-action-buttons">
        <button class="bot-action-btn" onclick="document.getElementById('rooms').scrollIntoView({behavior:'smooth'});"><i class="fas fa-calendar-check"></i> Book Online</button>
        <a href="tel:7879028316" class="bot-action-btn"><i class="fas fa-phone"></i> Call Pooja</a>
      </div>`;
    }

    // Dormitory queries
    if (query.includes('dorm') || query.includes('bed') || query.includes('349') || query.includes('sharing') || query.includes('bunk')) {
      return `🛏️ Yes! We provide <strong>Hygienic Shared Dormitory beds starting at just ₹349/day</strong>.<br>
      • Individual reading light & personal charging socket<br>
      • Heavy-duty personal steel locker with key<br>
      • 24/7 hot water geyser & clean shared washrooms<br>
      • 100% DG generator power backup for uninterrupted comfort.<br>
      Extremely popular for transit travelers, exam candidates, and site engineers!
      <div class="bot-action-buttons">
        <a href="https://wa.me/917879028316?text=Hi%20Pooja%2C%20I%20want%20to%20book%20a%20Dormitory%20Bed%20(Rs%20349)." target="_blank" class="bot-action-btn"><i class="fab fa-whatsapp"></i> Reserve Dorm Bed</a>
        <a href="tel:7879028316" class="bot-action-btn"><i class="fas fa-phone"></i> Call Reception</a>
      </div>`;
    }

    // Monthly PG Stay
    if (query.includes('pg') || query.includes('monthly') || query.includes('long') || query.includes('5499') || query.includes('paying guest')) {
      return `🏠 <strong>Furnished Monthly PG & Long-Term Stay (₹5,499/month):</strong><br>
      • Fully furnished private/shared rooms with study desk & wardrobe<br>
      • High-speed Wi-Fi, 24/7 electricity backup, and geyser<br>
      • Optional home-style pure veg dining / tiffin facility<br>
      • No hefty broker fees or long lease lock-ins.<br>
      Ideal for NTPC/NCL contractual engineers, managers, and students!
      <div class="bot-action-buttons">
        <a href="tel:9770236735" class="bot-action-btn"><i class="fas fa-phone"></i> Call Corporate Line (9770236735)</a>
        <a href="https://wa.me/919770236735?text=Hello%20Pooja%2C%20I%20am%20interested%20in%20Monthly%20PG%20Stay." target="_blank" class="bot-action-btn"><i class="fab fa-whatsapp"></i> WhatsApp Inquiry</a>
      </div>`;
    }

    // Location & Travel Distances
    if (query.includes('ntpc') || query.includes('vindhyanagar') || query.includes('distance') || query.includes('where') || query.includes('location') || query.includes('kahan') || query.includes('address') || query.includes('morwa') || query.includes('station') || query.includes('bus stand')) {
      return `📍 <strong>Strategic Central Location of Hotel Waidhan BnB:</strong><br>
      • <strong>Waidhan Bus Stand & Ambedkar Chowk:</strong> 500 meters (3 min walk)<br>
      • <strong>NTPC Vindhyanagar:</strong> ~10 km (15 min drive)<br>
      • <strong>NCL Headquarters (Panjreh):</strong> ~15 km (20 min drive)<br>
      • <strong>Singrauli Railway Station (Morwa):</strong> ~16 km (25 min drive)<br>
      • <strong>Shaktinagar Station:</strong> ~12 km.<br>
      We are located on the main road in the city center of Waidhan!
      <div class="bot-action-buttons">
        <a href="https://maps.google.com/?q=Hotel+Waidhan+BnB+Singrauli" target="_blank" class="bot-action-btn"><i class="fas fa-map-location-dot"></i> Google Maps Directions</a>
      </div>`;
    }

    // Banquet & Celebrations
    if (query.includes('banquet') || query.includes('event') || query.includes('hall') || query.includes('wedding') || query.includes('marriage') || query.includes('party') || query.includes('conference')) {
      return `🎉 <strong>Shree Grand Banquet & Conference Hall:</strong><br>
      • <strong>Capacity:</strong> 50 to 300 guests<br>
      • <strong>Amenities:</strong> Centralized AC, crystal chandeliers, projector, JBL audio system, and dedicated buffet dining<br>
      • Ideal for NTPC/NCL corporate seminars, birthday parties, weddings, and family get-togethers.<br>
      Our banquet manager is ready to tailor packages for you!
      <div class="bot-action-buttons">
        <a href="tel:9109302812" class="bot-action-btn"><i class="fas fa-phone"></i> Call Banquet Desk (9109302812)</a>
        <a href="https://wa.me/919109302812?text=Hello%2C%20I%20am%20inquiring%20about%20Shree%20Grand%20Banquet%20Hall." target="_blank" class="bot-action-btn"><i class="fab fa-whatsapp"></i> Banquet WhatsApp</a>
      </div>`;
    }

    // Check-in and Hotel Rules
    if (query.includes('check') || query.includes('time') || query.includes('policy') || query.includes('id') || query.includes('proof') || query.includes('aadhaar') || query.includes('rule')) {
      return `⏰ <strong>Hotel Policies & Times:</strong><br>
      • <strong>Check-In Time:</strong> 12:00 PM (24/7 early check-in subject to room availability)<br>
      • <strong>Check-Out Time:</strong> 11:00 AM<br>
      • <strong>Govt ID Proof:</strong> Aadhaar Card, Driving License, Voter ID, or Passport required for all adults at check-in.<br>
      • Free cancellation up to 24 hours prior to arrival date.`;
    }

    // Food, Dining & Breakfast
    if (query.includes('food') || query.includes('restaurant') || query.includes('dinner') || query.includes('lunch') || query.includes('breakfast') || query.includes('khana') || query.includes('zaika') || query.includes('veg')) {
      return `🍽️ Our in-house restaurant <strong>'The Zaika BnB'</strong> serves fresh pure veg and multi-cuisine meals from 7:00 AM to 11:00 PM.<br>
      • 24/7 in-room dining service<br>
      • Packed early-morning breakfast boxes for engineers visiting NTPC/NCL sites<br>
      • Hygienic kitchen with pure RO drinking water.
      <div class="bot-action-buttons">
        <button class="bot-action-btn" onclick="document.getElementById('restaurant').scrollIntoView({behavior:'smooth'});"><i class="fas fa-utensils"></i> Explore Restaurant</button>
      </div>`;
    }

    // Amenities, Wi-Fi & Generator Backup
    if (query.includes('wifi') || query.includes('wi-fi') || query.includes('internet') || query.includes('power') || query.includes('generator') || query.includes('backup') || query.includes('geyser') || query.includes('parking')) {
      return `⚡ <strong>Core Hotel Amenities:</strong><br>
      • <strong>100% DG Power Backup:</strong> Uninterrupted AC, lights & Wi-Fi during local city power cuts.<br>
      • <strong>High-Speed Wi-Fi:</strong> Complimentary fast internet across all rooms & dormitory.<br>
      • <strong>Hot Water:</strong> 24/7 geysers in all private and dorm bathrooms.<br>
      • <strong>Safe Parking:</strong> Dedicated CCTV-secured parking for cars and two-wheelers.`;
    }

    // Greetings
    if (query.includes('hi') || query.includes('hello') || query.includes('hey') || query.includes('namaste') || query.includes('pooja') || query.includes('good morning') || query.includes('good evening')) {
      return `Namaste! 🙏 I am <strong>Pooja Sharma</strong> from Hotel Waidhan BnB front desk.<br><br>
      How can I help you today? You can ask me about our <strong>₹349 Dormitory beds</strong>, <strong>AC rooms</strong>, <strong>monthly PG stays</strong>, or <strong>directions from Waidhan Bus Stand</strong>!
      <div class="bot-action-buttons">
        <a href="tel:7879028316" class="bot-action-btn"><i class="fas fa-phone"></i> Call Front Desk</a>
        <button class="bot-action-btn" onclick="document.getElementById('rooms').scrollIntoView({behavior:'smooth'});"><i class="fas fa-bed"></i> Browse Rooms</button>
      </div>`;
    }

    // General Fallback
    return `Namaste! I am <strong>Pooja Sharma</strong> from Hotel Waidhan BnB Front Desk. I am delighted to assist you with:<br>
    • 💰 Room tariffs (Dormitory ₹349, Budget ₹599, Cooler ₹849, AC ₹1,299, VIP ₹1,999)<br>
    • 📍 Distance to NTPC Vindhyanagar (10 km) & Waidhan Bus Stand (500m)<br>
    • 📞 Direct reception phone lines (+91 78790 28316)<br>
    • 🍽️ Restaurant timings & dining options<br>
    • 🎉 Shree Grand Banquet booking details.<br><br>
    Please let me know how I can help you!
    <div class="bot-action-buttons">
      <a href="tel:7879028316" class="bot-action-btn"><i class="fas fa-phone"></i> Call Pooja</a>
      <a href="https://wa.me/917879028316" target="_blank" class="bot-action-btn"><i class="fab fa-whatsapp"></i> WhatsApp Front Desk</a>
    </div>`;
  }
}

// 10. Photo Gallery Lightbox Viewer
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-caption')?.textContent || 'Hotel Waidhan BnB';
      
      const lightboxOverlay = document.createElement('div');
      lightboxOverlay.style.position = 'fixed';
      lightboxOverlay.style.inset = '0';
      lightboxOverlay.style.background = 'rgba(0,0,0,0.9)';
      lightboxOverlay.style.backdropFilter = 'blur(10px)';
      lightboxOverlay.style.zIndex = '1500';
      lightboxOverlay.style.display = 'flex';
      lightboxOverlay.style.flexDirection = 'column';
      lightboxOverlay.style.alignItems = 'center';
      lightboxOverlay.style.justifyContent = 'center';
      lightboxOverlay.style.padding = '2rem';
      lightboxOverlay.style.cursor = 'zoom-out';

      lightboxOverlay.innerHTML = `
        <div style="position: relative; max-width: 900px; width: 100%; text-align: center;">
          <img src="${img.src}" alt="${caption}" style="max-height: 80vh; max-width: 100%; border-radius: 12px; margin: 0 auto; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
          <p style="color: #fff; margin-top: 1rem; font-weight: 600; font-size: 1.1rem;">${caption}</p>
          <span style="position: absolute; top: -30px; right: 0; color: #fff; font-size: 2rem; cursor: pointer;">&times;</span>
        </div>
      `;

      lightboxOverlay.addEventListener('click', () => lightboxOverlay.remove());
      document.body.appendChild(lightboxOverlay);
    });
  });
}

// 11. Reception Desk / Booking Storage Management System
function getStoredBookings() {
  try {
    const raw = localStorage.getItem('waidhan_bnb_bookings');
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  // Default Seed Data so user immediately sees how reservations look
  return [
    {
      id: 'WBNB-739210',
      guestName: 'Rakesh Verma (NCL Contractor)',
      guestPhone: '7879028316',
      room: 'Executive AC Deluxe Room',
      checkin: '2026-10-22',
      checkout: '2026-10-24',
      nights: 2,
      amount: 2909,
      status: 'confirmed',
      timestamp: '21/10/2026 14:30'
    },
    {
      id: 'WBNB-481920',
      guestName: 'Suresh Patel (NTPC Vendor)',
      guestPhone: '9770236735',
      room: 'Dormitory Single Bed',
      checkin: '2026-10-22',
      checkout: '2026-10-23',
      nights: 1,
      amount: 349,
      status: 'whatsapp',
      timestamp: '21/10/2026 16:15'
    }
  ];
}

function saveBookingToStorage(booking) {
  const bookings = getStoredBookings();
  bookings.unshift(booking);
  try {
    localStorage.setItem('waidhan_bnb_bookings', JSON.stringify(bookings));
  } catch (e) {
    console.error(e);
  }
}

function initReceptionDesk() {
  const openBtn = document.getElementById('btn-open-reception-modal');
  const modalBackdrop = document.getElementById('reception-modal-backdrop');
  const closeBtn = document.getElementById('reception-modal-close');
  const tbody = document.getElementById('admin-bookings-tbody');
  const countEl = document.getElementById('admin-booking-count');
  const clearBtn = document.getElementById('btn-clear-bookings');
  const exportBtn = document.getElementById('btn-export-bookings');

  function renderTable() {
    const bookings = getStoredBookings();
    if (countEl) countEl.textContent = bookings.length;
    if (!tbody) return;

    if (bookings.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No bookings logged yet. New guest reservations will appear here automatically.</td></tr>`;
      return;
    }

    tbody.innerHTML = bookings.map(b => `
      <tr>
        <td><strong style="color: var(--accent);">${b.id}</strong><div style="font-size: 0.7rem; color: var(--text-dim);">${b.timestamp || ''}</div></td>
        <td><strong>${b.guestName}</strong><div style="font-size: 0.75rem; color: var(--text-muted);">${b.guestPhone}</div></td>
        <td>${b.room}</td>
        <td>${b.checkin} to ${b.checkout} (${b.nights}n)</td>
        <td><strong>₹${Number(b.amount).toLocaleString('en-IN')}</strong></td>
        <td><span class="booking-status-tag ${b.status}">${b.status === 'confirmed' ? 'Confirmed' : 'WhatsApp'}</span></td>
        <td>
          <a href="tel:${b.guestPhone}" style="color: var(--accent); margin-right: 10px;" title="Call Guest"><i class="fas fa-phone-alt"></i></a>
          <a href="https://wa.me/91${b.guestPhone.replace(/\D/g, '')}" target="_blank" style="color: var(--whatsapp); margin-right: 10px;" title="WhatsApp Guest"><i class="fab fa-whatsapp"></i></a>
          <button onclick="deleteBooking('${b.id}')" style="color: var(--danger); font-size: 0.85rem;" title="Remove"><i class="fas fa-trash"></i></button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteBooking = function(id) {
    if (!confirm('Are you sure you want to remove this booking?')) return;
    const bookings = getStoredBookings().filter(b => b.id !== id);
    localStorage.setItem('waidhan_bnb_bookings', JSON.stringify(bookings));
    renderTable();
  };

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      renderTable();
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Clear all booking records?')) {
        localStorage.setItem('waidhan_bnb_bookings', JSON.stringify([]));
        renderTable();
      }
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const data = JSON.stringify(getStoredBookings(), null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `hotel-waidhan-bookings-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
    });
  }
}
