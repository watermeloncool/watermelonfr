document.head.insertAdjacentHTML('beforeend', `
    <meta charset="utf-8">
    <title>Watermelon Articles</title>
    <meta name="robots" content="index,follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
`);


// Ajouter <div class="article"> au début du body
document.body.insertAdjacentHTML('afterbegin', '<div class="article">');

// Ajouter </div> à la fin du body
document.body.insertAdjacentHTML('beforeend', '</div>');