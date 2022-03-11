const productsController = require('./../controllers/productsController');

const router = expreess.Router;

// Puede ser que routter sea con doble T?;

// RUTAS ESPECIFICAS + PAGINA
router.get('/', productsController.index)
router.get('/home', productsController.home)
router.get('/productos', productsController.products);
router.get('/productos/detalleProducto', productController.productDetails);
router.get('/productos/reservas', productController.productCart);
router.get('/productos/buscar', productController.productSearch);

/* ────────────────
  router.get('/products/:id. , function(req, res) {
		var p = req.param.id
		console.log(`el numero dado es ${p}`)
		res.send(`el numero dado es el ${p}`)
		───────────────\*/

module['exports'] = productsController;