module.exports = {

    get:(req,res)=>{
        res.status(200).send('Autenticar Usuários')
    },

    post:(req,res)=>{
        res.status(200).send('Criar usuários')

    },

    patch:(req,res)=>{
        res.status(200).send("alterando Patch usuário")
    },

    put:(req,res)=>{
        res.status(200).send("alterando Put usuário")
    },

    delete:(req,res)=>{
        res.status(200).send("Excluindo usuário")
    }
}