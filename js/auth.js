/**
 * Hotel Waidhan BnB - Authentication & User State System
 * Google & Apple One-Tap Simulation | Local User Storage | Session Management
 */

const AUTH_STORAGE_KEY = 'waidhan_bnb_current_user';
const USERS_DB_KEY = 'waidhan_bnb_registered_users';

// Initialize Authentication State on every page
document.addEventListener('DOMContentLoaded', () => {
  initAuthState();
  initAuthUI();
});

// Get currently logged-in user
function getCurrentUser() {
  try {
    const data = localStorage.getItem(AUTH_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

// Set current logged-in user
function setCurrentUser(user) {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    updateNavAuthUI(user);
  } catch (e) {
    console.error('Error saving user session:', e);
  }
}

// Sign out user
function signOutUser() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  showToast('You have been signed out successfully.', 'info');
  setTimeout(() => {
    window.location.reload();
  }, 700);
}

// Get all registered users
function getRegisteredUsers() {
  try {
    const data = localStorage.getItem(USERS_DB_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

// Save a new registered user
function saveNewUser(user) {
  const users = getRegisteredUsers();
  users.push(user);
  localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
}

// Initialize Auth Navbar UI across all pages
function initAuthState() {
  const user = getCurrentUser();
  updateNavAuthUI(user);
}

// Update Header & Drawer Auth Buttons
function updateNavAuthUI(user) {
  const authNavContainers = document.querySelectorAll('.auth-nav-slot');
  const drawerAuthSlot = document.getElementById('drawer-auth-slot');
  const bottomNavAuth = document.getElementById('bottom-nav-auth-item');

  if (user) {
    // User is logged in
    const userFirstName = (user.name && user.name.trim()) ? user.name.trim().split(' ')[0] : 'Guest';
    const avatarLetter = (user.name && user.name.trim()) ? user.name.trim().charAt(0).toUpperCase() : 'G';

    const authHtml = `
      <div class="user-profile-menu-wrap" id="user-profile-menu-wrap">
        <button type="button" class="btn-user-profile" id="btn-user-profile" aria-expanded="false" title="Account Details (${user.name})">
          <div class="user-avatar-badge">${user.photoUrl ? `<img src="${user.photoUrl}" alt="${user.name}">` : avatarLetter}</div>
          <span class="user-nav-name">Hi, ${userFirstName}</span>
          <i class="fas fa-chevron-down" style="font-size: 0.6rem; opacity: 0.7;"></i>
        </button>
        <div class="user-dropdown-menu" id="user-dropdown-menu">
          <div class="user-dropdown-header">
            <span class="user-dropdown-name">${user.name}</span>
            <span class="user-dropdown-email">${user.email || user.phone || 'Verified Guest'}</span>
            ${user.provider ? `<span class="user-provider-tag"><i class="fas fa-shield-alt"></i> ${user.provider}</span>` : ''}
          </div>
          <div class="user-dropdown-divider"></div>
          <a href="rooms.html" class="user-dropdown-item"><i class="fas fa-bed"></i> Browse Rooms (10% Off)</a>
          <button type="button" class="user-dropdown-item" id="btn-view-my-bookings"><i class="fas fa-receipt"></i> My Bookings</button>
          <div class="user-dropdown-divider"></div>
          <button type="button" class="user-dropdown-item text-danger" id="btn-user-logout"><i class="fas fa-sign-out-alt"></i> Sign Out</button>
        </div>
      </div>
      <a href="rooms.html" class="btn-book-nav" id="btn-header-book" title="Book a Stay at Hotel Waidhan BnB">
        <i class="fas fa-calendar-check"></i>
        <span>Book</span>
      </a>
    `;

    authNavContainers.forEach(container => {
      container.innerHTML = authHtml;
    });

    if (drawerAuthSlot) {
      drawerAuthSlot.innerHTML = `
        <div class="drawer-user-card">
          <div class="user-avatar-badge" style="width: 40px; height: 40px; font-size: 1.1rem;">
            ${user.photoUrl ? `<img src="${user.photoUrl}" alt="${user.name}">` : avatarLetter}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${user.name}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${user.email || user.phone}</div>
          </div>
          <button type="button" class="btn-drawer-logout" id="btn-drawer-logout" title="Sign Out">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        </div>
      `;

      const drawerLogout = document.getElementById('btn-drawer-logout');
      if (drawerLogout) {
        drawerLogout.addEventListener('click', signOutUser);
      }
    }

    if (bottomNavAuth) {
      bottomNavAuth.innerHTML = `
        <div class="bottom-nav-avatar">
          ${user.photoUrl ? `<img src="${user.photoUrl}" alt="${user.name}">` : `<span class="bottom-avatar-text">${avatarLetter}</span>`}
        </div>
        <span>Profile</span>
      `;
      bottomNavAuth.href = "login.html#account";
      bottomNavAuth.title = `Signed in as ${user.name}`;
    }

    // Bind dropdown events
    bindUserDropdownEvents();

    // Auto-populate booking modal if inputs exist on page
    autoPopulateBookingModal(user);

  } else {
    // User is a guest (not logged in) - Desktop top nav shows Book button that redirects to login first
    const guestHtml = `
      <a href="login.html?redirect=rooms.html&intent=book" class="btn-book-nav" id="btn-header-book" title="Book a Stay (Sign in or create account to proceed)">
        <i class="fas fa-calendar-check"></i>
        <span>Book</span>
      </a>
    `;

    authNavContainers.forEach(container => {
      container.innerHTML = guestHtml;
    });

    if (drawerAuthSlot) {
      drawerAuthSlot.innerHTML = `
        <div style="padding: 0.5rem 0 1rem;">
          <a href="login.html?redirect=rooms.html&intent=book" class="btn-primary" style="width: 100%; text-align: center; justify-content: center; font-weight: 800;">
            <i class="fas fa-calendar-check"></i> Book Now (Sign In / Register)
          </a>
        </div>
      `;
    }

    if (bottomNavAuth) {
      bottomNavAuth.innerHTML = `
        <i class="fas fa-calendar-check"></i>
        <span>Book</span>
      `;
      bottomNavAuth.href = "login.html?redirect=rooms.html&intent=book";
      bottomNavAuth.title = "Book a Stay (Sign in or register)";
    }
  }
}

// Auto-populate guest details in booking modal
function autoPopulateBookingModal(user) {
  if (!user) return;
  const nameInput = document.getElementById('modal-guest-name');
  const phoneInput = document.getElementById('modal-guest-phone');
  if (nameInput && (!nameInput.value || nameInput.value.trim() === '')) {
    nameInput.value = user.name || '';
  }
  if (phoneInput && (!phoneInput.value || phoneInput.value.trim() === '')) {
    phoneInput.value = user.phone || '';
  }

  // Display member tag if not already added
  const summaryBox = document.querySelector('.booking-summary-box');
  if (summaryBox && !document.getElementById('member-vip-summary-tag')) {
    const memberTag = document.createElement('div');
    memberTag.id = 'member-vip-summary-tag';
    memberTag.className = 'summary-row member-discount-row';
    memberTag.style.cssText = 'color: var(--accent); font-size: 0.82rem; font-weight: 600; display: flex; align-items: center; justify-content: space-between; padding: 4px 0; border-top: 1px dashed rgba(212, 175, 55, 0.3); margin-top: 4px;';
    memberTag.innerHTML = `
      <span><i class="fas fa-crown" style="color: var(--accent); margin-right: 4px;"></i> Logged-in Guest:</span>
      <span style="color: var(--accent); font-weight: 700;">${user.name}</span>
    `;
    summaryBox.appendChild(memberTag);
  }
}

// User dropdown menu interaction
function bindUserDropdownEvents() {
  const profileWraps = document.querySelectorAll('.user-profile-menu-wrap');

  profileWraps.forEach(wrap => {
    const trigger = wrap.querySelector('.btn-user-profile');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    // Logout button
    const logoutBtn = wrap.querySelector('#btn-user-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', signOutUser);
    }

    // View My Bookings button
    const bookingsBtn = wrap.querySelector('#btn-view-my-bookings');
    if (bookingsBtn) {
      bookingsBtn.addEventListener('click', () => {
        const receptionModal = document.getElementById('reception-modal-backdrop');
        if (receptionModal) {
          receptionModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        } else {
          window.location.href = 'index.html#booking';
        }
      });
    }
  });
}

// ============================================================================
// LOGIN & SIGN UP PAGE LOGIC (Active on login.html)
// ============================================================================
function initAuthUI() {
  const authContainer = document.getElementById('auth-card-container');
  if (!authContainer) return; // Not on login.html

  const tabSignIn = document.getElementById('tab-btn-signin');
  const tabOtp = document.getElementById('tab-btn-otp');
  const tabSignUp = document.getElementById('tab-btn-signup');
  const formSignIn = document.getElementById('form-signin');
  const formOtp = document.getElementById('form-otp');
  const formSignUp = document.getElementById('form-signup');
  const accountOverview = document.getElementById('auth-account-overview');

  // Display Booking Intent Step 1 Banner if coming from Book button
  const urlParams = new URLSearchParams(window.location.search);
  const intent = urlParams.get('intent');
  const redirect = urlParams.get('redirect');
  const bookingBanner = document.getElementById('auth-booking-intent-banner');
  if (bookingBanner && (intent === 'book' || redirect === 'rooms.html')) {
    bookingBanner.style.display = 'flex';
  }

  // Toggle Tabs between Password Sign In, Mobile OTP, and Create Account
  function switchTab(activeTab, activeForm) {
    [tabSignIn, tabOtp, tabSignUp].forEach(tab => { if (tab) tab.classList.remove('active'); });
    [formSignIn, formOtp, formSignUp].forEach(form => { if (form) form.style.display = 'none'; });
    if (activeTab) activeTab.classList.add('active');
    if (activeForm) activeForm.style.display = 'block';
    if (accountOverview) accountOverview.style.display = 'none';
  }

  if (tabSignIn) tabSignIn.addEventListener('click', () => switchTab(tabSignIn, formSignIn));
  if (tabOtp) tabOtp.addEventListener('click', () => switchTab(tabOtp, formOtp));
  if (tabSignUp) tabSignUp.addEventListener('click', () => switchTab(tabSignUp, formSignUp));

  // Mobile OTP Request Handler
  let generatedOtp = '4868';
  const btnRequestOtp = document.getElementById('btn-request-otp');
  const otpMobileInput = document.getElementById('otp-mobile-input');
  const otpHintBanner = document.getElementById('otp-hint-banner');
  const otpCodeGroup = document.getElementById('otp-code-group');
  const otpCodeInput = document.getElementById('otp-code-input');
  const btnVerifyOtpSubmit = document.getElementById('btn-verify-otp-submit');
  const generatedOtpDisplay = document.getElementById('generated-otp-display');

  if (btnRequestOtp && otpMobileInput) {
    btnRequestOtp.addEventListener('click', () => {
      const mobile = otpMobileInput.value.trim();
      if (!mobile || !/^\d{10}$/.test(mobile)) {
        showToast('Please enter a valid 10-digit mobile number.', 'warning');
        otpMobileInput.focus();
        return;
      }

      generatedOtp = String(Math.floor(1000 + Math.random() * 9000));
      if (generatedOtpDisplay) generatedOtpDisplay.textContent = generatedOtp;
      if (otpHintBanner) otpHintBanner.style.display = 'block';
      if (otpCodeGroup) otpCodeGroup.style.display = 'block';
      if (btnVerifyOtpSubmit) btnVerifyOtpSubmit.style.display = 'flex';
      btnRequestOtp.textContent = 'Resend';
      btnRequestOtp.classList.replace('btn-primary', 'btn-secondary');

      showToast(`Verification OTP sent to +91 ${mobile}! Code: ${generatedOtp}`, 'success');
      if (otpCodeInput) {
        otpCodeInput.value = generatedOtp;
        otpCodeInput.focus();
      }
    });
  }

  // Mobile OTP Form Submit Handler
  if (formOtp) {
    formOtp.addEventListener('submit', (e) => {
      e.preventDefault();
      const mobile = otpMobileInput.value.trim();
      const enteredCode = otpCodeInput ? otpCodeInput.value.trim() : '';

      if (!mobile || !/^\d{10}$/.test(mobile)) {
        showToast('Please enter a valid 10-digit mobile number.', 'error');
        return;
      }

      if (!enteredCode || enteredCode !== generatedOtp) {
        showToast(`Invalid OTP code. Please enter ${generatedOtp}.`, 'error');
        return;
      }

      const users = getRegisteredUsers();
      let matchedUser = users.find(u => u.phone && u.phone.includes(mobile));
      if (!matchedUser) {
        matchedUser = {
          name: `Guest ${mobile.slice(-4)}`,
          email: `traveler${mobile.slice(-4)}@hotelwaidhanbnb.com`,
          phone: `+91 ${mobile}`,
          provider: 'Mobile OTP',
          joinedAt: new Date().toLocaleDateString(),
          discountCode: 'WAIDHAN10'
        };
        saveNewUser(matchedUser);
      }

      setCurrentUser(matchedUser);
      showToast(`Welcome, ${matchedUser.name}! Verified via Mobile OTP.`, 'success');
      redirectAfterLogin();
    });
  }

  // Password Visibility Toggle
  document.querySelectorAll('.btn-toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;

      const icon = btn.querySelector('i');
      if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
      } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
      }
    });
  });

  // Password Strength Checker on Sign Up Form
  const signupPassInput = document.getElementById('signup-password');
  const strengthBar = document.getElementById('password-strength-fill');
  const strengthText = document.getElementById('password-strength-text');

  if (signupPassInput && strengthBar && strengthText) {
    signupPassInput.addEventListener('input', () => {
      const val = signupPassInput.value;
      let score = 0;
      if (val.length >= 6) score++;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      const strengths = [
        { width: '0%', color: '#ef4444', text: 'Too short' },
        { width: '25%', color: '#ef4444', text: 'Weak' },
        { width: '50%', color: '#f59e0b', text: 'Fair' },
        { width: '75%', color: '#38bdf8', text: 'Good' },
        { width: '100%', color: '#10b981', text: 'Strong' }
      ];

      const current = val.length === 0 ? strengths[0] : strengths[score];
      strengthBar.style.width = current.width;
      strengthBar.style.backgroundColor = current.color;
      strengthText.textContent = current.text;
      strengthText.style.color = current.color;
    });
  }

  // Handle Sign In Submit
  if (formSignIn) {
    formSignIn.addEventListener('submit', (e) => {
      e.preventDefault();
      const identifier = document.getElementById('signin-identifier').value.trim();
      const password = document.getElementById('signin-password').value;

      if (!identifier || !password) {
        showToast('Please enter both your email/phone and password.', 'error');
        return;
      }

      // Check registered users
      const users = getRegisteredUsers();
      const matched = users.find(u => 
        (u.email.toLowerCase() === identifier.toLowerCase() || u.phone === identifier) && 
        u.password === password
      );

      if (matched) {
        setCurrentUser(matched);
        showToast(`Welcome back, ${matched.name}!`, 'success');
        redirectAfterLogin();
      } else {
        // Allow demo user or create session
        if (identifier.includes('@') && password.length >= 4) {
          const guestUser = {
            name: identifier.split('@')[0],
            email: identifier,
            phone: '+91 9770236735',
            provider: 'Email',
            joinedAt: new Date().toLocaleDateString()
          };
          setCurrentUser(guestUser);
          showToast(`Signed in successfully as ${guestUser.name}!`, 'success');
          redirectAfterLogin();
        } else {
          showToast('Invalid credentials. Please verify your details or create an account.', 'error');
        }
      }
    });
  }

  // Handle Sign Up Submit
  if (formSignUp) {
    formSignUp.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      const phone = document.getElementById('signup-phone').value.trim();
      const password = document.getElementById('signup-password').value;
      const terms = document.getElementById('signup-terms');

      if (!name || !email || !phone || !password) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      if (terms && !terms.checked) {
        showToast('Please accept the Terms & Conditions.', 'warning');
        return;
      }

      const users = getRegisteredUsers();
      if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        showToast('An account with this email already exists. Please sign in.', 'error');
        return;
      }

      const newUser = {
        name,
        email,
        phone,
        password,
        provider: 'Email',
        joinedAt: new Date().toLocaleDateString(),
        discountCode: 'WAIDHAN10'
      };

      saveNewUser(newUser);
      setCurrentUser(newUser);
      showToast(`Account created! Welcome to Hotel Waidhan BnB, ${name}! (10% discount applied)`, 'success');
      redirectAfterLogin();
    });
  }

  // Social Auth Handlers: Continue with Google & Continue with Apple
  bindSocialAuthButtons();

  // If already logged in, show account overview
  const currentUser = getCurrentUser();
  if (currentUser && accountOverview) {
    renderAccountOverview(currentUser);
  }
}

// Social Authentication Modals / Simulations
function bindSocialAuthButtons() {
  const googleBtns = document.querySelectorAll('.btn-social-auth.google');
  const appleBtns = document.querySelectorAll('.btn-social-auth.apple');

  googleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      triggerSocialAuth('Google');
    });
  });

  appleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      triggerSocialAuth('Apple');
    });
  });
}

// Trigger Simulated OAuth Flow for Google / Apple
function triggerSocialAuth(provider) {
  const modal = document.createElement('div');
  modal.className = 'oauth-popup-backdrop';
  modal.innerHTML = `
    <div class="oauth-popup-card">
      <div class="oauth-popup-header">
        <i class="fab fa-${provider.toLowerCase()}" style="font-size: 1.8rem; color: ${provider === 'Google' ? '#4285F4' : 'var(--text-main)'};"></i>
        <h3>Continue with ${provider}</h3>
        <p>Hotel Waidhan BnB is requesting access to your verified profile name and email address.</p>
      </div>
      <div class="oauth-account-choice" id="oauth-account-choice">
        <div class="oauth-user-item" data-name="Guest Traveler" data-email="guest.traveler@${provider.toLowerCase()}.com">
          <div class="oauth-avatar">${provider === 'Google' ? 'G' : ''}</div>
          <div class="oauth-user-info">
            <strong>Traveler Guest</strong>
            <span>traveler.guest@gmail.com</span>
          </div>
        </div>
        <div class="oauth-user-item custom" id="oauth-custom-choice">
          <i class="fas fa-user-plus" style="font-size: 1.1rem; color: var(--accent);"></i>
          <div class="oauth-user-info">
            <strong>Use another ${provider} account</strong>
            <span>Sign in with custom name & email</span>
          </div>
        </div>
      </div>
      <div class="oauth-popup-footer">
        <button type="button" class="btn-secondary" id="oauth-cancel-btn">Cancel</button>
        <button type="button" class="btn-primary" id="oauth-confirm-btn">Confirm & Continue</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('open'), 10);

  // Close logic
  const cancelBtn = modal.querySelector('#oauth-cancel-btn');
  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    setTimeout(() => modal.remove(), 250);
  });

  // Account item select
  let selectedName = "Priyanshu Verma";
  let selectedEmail = `priyanshu.${provider.toLowerCase()}@example.com`;

  const userItems = modal.querySelectorAll('.oauth-user-item');
  userItems.forEach(item => {
    item.addEventListener('click', () => {
      userItems.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      if (item.getAttribute('data-name')) {
        selectedName = item.getAttribute('data-name');
        selectedEmail = item.getAttribute('data-email');
      } else {
        const customName = prompt('Enter your name for ' + provider + ' sign in:', 'Abhijay Sharma');
        if (customName) {
          selectedName = customName;
          selectedEmail = customName.toLowerCase().replace(/\s+/g, '.') + '@' + (provider === 'Google' ? 'gmail.com' : 'icloud.com');
        }
      }
    });
  });

  // Auto select first
  if (userItems[0]) userItems[0].classList.add('selected');

  // Confirm logic
  const confirmBtn = modal.querySelector('#oauth-confirm-btn');
  confirmBtn.addEventListener('click', () => {
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Connecting to ${provider}...`;

    setTimeout(() => {
      const socialUser = {
        name: selectedName,
        email: selectedEmail,
        phone: '+91 7879028316',
        provider: provider,
        joinedAt: new Date().toLocaleDateString(),
        photoUrl: provider === 'Google' 
          ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' 
          : ''
      };

      setCurrentUser(socialUser);
      modal.classList.remove('open');
      setTimeout(() => modal.remove(), 250);

      showToast(`Successfully verified with ${provider}! Welcome, ${socialUser.name}!`, 'success');
      redirectAfterLogin();
    }, 900);
  });
}

// Redirect after login based on query param or default
function redirectAfterLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectTarget = urlParams.get('redirect') || 'index.html';

  setTimeout(() => {
    window.location.href = redirectTarget;
  }, 900);
}

// Render Account Overview when already logged in on login.html
function renderAccountOverview(user) {
  const accountOverview = document.getElementById('auth-account-overview');
  const formSignIn = document.getElementById('form-signin');
  const formSignUp = document.getElementById('form-signup');
  const tabsWrap = document.querySelector('.auth-tabs-header');

  if (!accountOverview) return;

  if (formSignIn) formSignIn.style.display = 'none';
  if (formSignUp) formSignUp.style.display = 'none';
  if (tabsWrap) tabsWrap.style.display = 'none';

  accountOverview.style.display = 'block';
  accountOverview.innerHTML = `
    <div class="logged-in-profile-card">
      <div class="profile-header-badge">
        <div class="user-avatar-badge" style="width: 58px; height: 58px; font-size: 1.5rem;">
          ${user.photoUrl ? `<img src="${user.photoUrl}" alt="${user.name}">` : user.name.charAt(0).toUpperCase()}
        </div>
        <div style="flex: 1;">
          <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 2px;">${user.name}</h2>
          <span style="font-size: 0.82rem; color: var(--text-muted);">${user.email}</span>
        </div>
        <span class="user-provider-tag"><i class="fab fa-${user.provider ? user.provider.toLowerCase() : 'user'}"></i> ${user.provider || 'Direct'}</span>
      </div>

      <div class="profile-info-grid">
        <div class="profile-stat-box">
          <span class="stat-label">Phone Number</span>
          <span class="stat-value">${user.phone || '+91 7879028316'}</span>
        </div>
        <div class="profile-stat-box">
          <span class="stat-label">Member Since</span>
          <span class="stat-value">${user.joinedAt || 'Oct 2026'}</span>
        </div>
        <div class="profile-stat-box">
          <span class="stat-label">Membership Tier</span>
          <span class="stat-value" style="color: var(--accent); font-weight: 700;">★ VIP Direct Guest</span>
        </div>
        <div class="profile-stat-box">
          <span class="stat-label">Direct Discount Code</span>
          <span class="stat-value" style="color: var(--success); font-weight: 700;">WAIDHAN10 (10% Off)</span>
        </div>
      </div>

      <div class="profile-actions-bar">
        <a href="rooms.html" class="btn-primary" style="flex: 1; text-align: center; justify-content: center;">
          <i class="fas fa-bed"></i> Book a Room Direct
        </a>
        <a href="index.html" class="btn-secondary" style="flex: 1; text-align: center; justify-content: center;">
          <i class="fas fa-home"></i> Back to Home
        </a>
        <button type="button" class="btn-secondary" id="btn-account-logout" style="color: var(--danger); border-color: rgba(239, 68, 68, 0.4);">
          <i class="fas fa-sign-out-alt"></i> Sign Out
        </button>
      </div>
    </div>
  `;

  const logoutBtn = document.getElementById('btn-account-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', signOutUser);
  }
}

// Global Toast Notification Helper
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `custom-toast ${type}`;

  const iconMap = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    warning: 'fa-triangle-exclamation',
    info: 'fa-info-circle'
  };

  toast.innerHTML = `
    <i class="fas ${iconMap[type] || 'fa-bell'}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
