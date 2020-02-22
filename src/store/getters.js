const getters = {
  uid: state => state.user.uid,
  token: state => state.user.token,
  roles: state => state.user.roles
};

export default getters;
