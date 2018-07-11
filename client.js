(function(w) {
    const CrossStorageClient = w.CrossStorageClient
    const storage = new CrossStorageClient('http://localhost:3000/hub.php');
    const res = storage.onConnect().then((v) => {
        return storage.get('key')
    });
    console.log(res);
})(window);
