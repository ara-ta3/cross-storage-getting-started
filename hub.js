(function(w) {
    const CrossStorageHub = w.CrossStorageHub
    const CrossStorageClient = w.CrossStorageClient

    CrossStorageHub.init([
        {origin: /localhost:3000$/, allow: ['get', 'set', 'del', 'getKeys', 'clear']},
        {origin: /localhost:3001$/, allow: ['get', 'set', 'del', 'getKeys', 'clear']}
    ]);
//    const storage = new CrossStorageClient('http://localhost:3000/hub.php');
//    storage.onConnect().then(() => {
//        return storage.set('key', JSON.stringify({foo: 'bar'}));
//    });
})(window);
