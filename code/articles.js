document.head.insertAdjacentHTML('beforeend', `
    <meta charset="utf-8">
    <title>Watermelon Articles</title>
    <meta name="robots" content="index,follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
`);


// Envelopper tout le contenu du body dans une div
document.body.innerHTML = '<div class="article">' + document.body.innerHTML + '</div>';