function handlePost() {
        $(".js-note-content-entry").on("submit", event => {
            event.preventDefault();

            app.post('/notes', notes.create);
        });
    }
