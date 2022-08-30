$('form').on('submit', function(e){
    e.preventDefault();

    let $titleInput = $('input').eq(0).val();
    let $ratingInput = $('input').eq(1).val();

    const $moviesDiv = $('#movies-div');
    const $moviesList = $('<div></div>').attr('id', 'movieItem');
    const $removeBtn = $('<button>Remove Movie</button>')
    
    // Appends new div to movie div
    $moviesDiv.append($moviesList);
    //Appends input values to new div
    $moviesList.append(`Movie Title: ${$titleInput}, Movie Rating: ${$ratingInput}`);
    //Appends button to div
    $moviesList.append($removeBtn);

    //adds listener to remove added movie
    $removeBtn.on('click', function(){
        $(this).parent().remove();
    })

    // Resets inputs
    $('form').trigger('reset');
})