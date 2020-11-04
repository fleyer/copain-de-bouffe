import { createServer } from "miragejs"


const makeServer = ()=>{

    let server = createServer()
    server.get("/api/food", {
        "data": [
            {
                "name": "ramen",
                "imageLink": "assets/images/food/ramen.jpg",
                "link": "/food/ramen",
                "description": "Les rāmen (ラーメン?, prononcé /ɾaː.meɴ/) sont des mets japonais constitués de pâtes dans un bouillon à base de poisson ou de viande et souvent assaisonnés au miso ou à la sauce soja, importés de Chine au début du xxe siècle."
            },
            {
                "name": "raclette",
                "imageLink": "assets/images/food/raclette.jpg",
                "link": "/food/raclette",
                "description": "La raclette (Bratchäs, « fromage rôti », en suisse allemand) est d'une part un fromage (le raclette) originaire du canton du Valais en Suisse1, et d'autre part, une recette de cuisine traditionnelle et emblématique de la cuisine suisse, connue dans le monde entier, variante des fondues au fromage, à base de ce fromage fondu, raclé au fur et à mesure qu’il fond2, et servie traditionnellement avec des pommes de terre en robe des champs et accompagnée de légumes au vinaigre (cornichons, oignons)3."
            }
        ]
    })
}

export {
    makeServer
}