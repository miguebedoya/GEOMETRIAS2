//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)




//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría

const geometry = new THREE.ConeGeometry( 2, 2, 5 );



//material 
    const material = new THREE.MeshNormalMaterial();
    material.flatShading = true;
    
//fin material
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;



function animate(){

    requestAnimationFrame( animate );
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;
    line.rotation.y += 0.01;
    line.rotation.x += 0.01;
    renderer.render( scene, camera );
}
animate();