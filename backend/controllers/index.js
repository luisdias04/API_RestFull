module.exports = {

    get:(req,res)=>{
        res.status(200).send('home Autenticar Usuários')
    },

    post:(req,res)=>{
        res.status(200).send('home - Criar usuários')

    },

    patch:(req,res)=>{
        res.status(200).send("home - alterando Patch usuário")
    },

    put:(req,res)=>{
        res.status(200).send("home - alterando Put usuário")
    },

    delete:(req,res)=>{
        res.status(200).send("home - Excluindo usuário")
    }
}