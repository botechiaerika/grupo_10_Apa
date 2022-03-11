let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: 'APA' });
    },
    landingUser: (req, res) =>{
        res.render('users/landingpageUser', { title: 'HOME' });
    },
    crearCuenta: (req, res) =>{
        res.render('users/cadastroUsuarios', { title: 'CREAR CUENTA' });
    },
    iniciarSeccion: (req, res) =>{
        res.render('users/login', { title: 'INICIAR SECCION' });
    }
}

module.exports = controller