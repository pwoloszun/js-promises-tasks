var UsersRepository = (function() {
  var USERS = [
    {login: "Bob", password: "#secret", id: 1},
    {login: "Kate", password: "qq", id: 2},
    {login: "Ed", password: "imba!", id: 3}
  ];

  function findByLogin(login) {
    var user;
    for (var i = 0; i < USERS.length; i++) {
      user = USERS[i];
      if (user.login === login)
        return user;
    }
    return null;
  }

  return {
    findByLogin: findByLogin
  };
})();
