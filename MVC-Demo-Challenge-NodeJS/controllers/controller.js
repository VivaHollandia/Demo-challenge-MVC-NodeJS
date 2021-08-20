
const { Article } = require('../models/schema');
 
const list = (req, res) => {
    Article.find()
        .then(result => 
            res.render('articlesList', { result }))
        .catch(err => console.error(err))
}
const newA = (req, res)=>{
    if (req.method === 'GET') {
        res.render('addArticle', error = null)
    }
    else if(req.method === 'POST'){
        // console.log(req.body)
        const schem = new Article(req.body);
        schem.save()
            .then( () => res.redirect('/'))
            .catch(err =>{
                // console.log(err.errors.title.properties.message, err.errors.article.properties.message)
                const error = {errTitle: err.errors.title.properties.message, errArticle: err.errors.article.properties.message}
                res.render("addArticle", {error:error})
                console.log(error)
            })
    }
}

const singleArticle = (req, res) => {
    Article.findById(req.params.id)
    .then(result => { res.render('oneArticle', {val:result})})
    .catch(err => console.log(err))
}

const removeArticle = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(result => res.redirect('/'))
        .catch(err => console.log(err))
}

const updateArticle = (req, res) =>{
    if(req.method === 'GET'){
        Article.findById(req.params.id)
            .then(result => res.render('editArticle', {result}))
            .catch(err => console.log(err))
    }
    else if(req.method === 'POST'){
        Article.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect('/'))
            .catch(err => console.log(err))
    }
    
}

module.exports =  {
    list,
    newA,
    singleArticle,
    removeArticle,
    updateArticle
}