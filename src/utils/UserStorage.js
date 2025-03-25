const TOKEN_KEY = 's_token';
const USER_KEY = 's_user';
const UserStorage = {
  saveToken: (token) => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken: () => localStorage.getItem(TOKEN_KEY),

  saveUser: (user) => {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  clearStorage: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getUserRole: function () {
    const user = this.getUser(); // ✅ FIX: Use function with `this`
    return user ? user.role : null;
  },

  isClientLoggedIn: function () {
    if (!this.getToken()) return false;
    return this.getUserRole() === "CLIENT"; // ✅ FIX
  },

  isCompanyLoggedIn: function () {
    if (!this.getToken()) return false;
    return this.getUserRole() === "COMPANY"; // ✅ FIX
  },

  signOut: function () {
    this.clearStorage();
  },
};

export default UserStorage;