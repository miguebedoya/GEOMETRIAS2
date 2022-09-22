const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)



//fondo
var loader = new THREE.TextureLoader();
loader.load("../img/silla ba.jpg", function(texture){
    scene.background = texture;
});
 

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría
const geometry = new THREE.TorusKnotGeometry( 10, 5, 62, 8, 17, 3 );
//textura
//fin textura

//material 
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 1;
    material.roughness = 0;

const ambientLight = new THREE.AmbientLight(0xDC3F0D, 4);
scene.add(ambientLight);

const PointLight = new THREE.PointLight(0x0061FF, 6);
scene.add(PointLight);
PointLight.position.set(30,20,30);
//fin material
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 38;



function animate(){

    requestAnimationFrame( animate );
    /*cube.rotation.x += 0.01;*/ 
    cube.rotation.y += 0.01;
    line.rotation.y += 0.01;
   
    renderer.render( scene, camera );
}
animate();