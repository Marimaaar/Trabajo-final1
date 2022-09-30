const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();
loader.load(
    '../img/fondo.png', function(texture){
        scene.background = texture;
    }
)

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry( 7.5, 3, 70, 11, 12, 13 );
const material = new THREE.MeshMatcapMaterial();
const torusKnot = new THREE.Mesh( geometry, material );
const textureLoader = new THREE.TextureLoader
const matcap = textureLoader.load('img/galaxy.jpeg')
material.matcap = matcap;
material.flatShading = true;
scene.add( torusKnot );

const gltfloader = new THREE.GLTFLoader();
const light = new THREE.AmbientLight(0xffffff, 2);
scene.add( light );
gltfloader.load('../assets/robot/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.1, 0.1, 0.1)
    scene.add(loaderObjeto);
    console.log('carga completa');
    loaderObjeto.position.x = 5;
    loaderObjeto.position.y = 0;
    controls = new THREE.DragControls([loaderObjeto],camera, renderer.domElement)
}, ()=>{
    
    console.log('cargando')
}, ()=>{
    console.log('error')
},
);

const gltfloader1 = new THREE.GLTFLoader();
const light1 = new THREE.AmbientLight(0xffffff, 2);
scene.add( light );
gltfloader.load('../assets/persona/scene.gltf',
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(20, 20, 20)
    scene.add(loaderObjeto);
    console.log('carga completa');
    loaderObjeto.position.x = -30;
    loaderObjeto.position.y = -35;
    controls = new THREE.DragControls([loaderObjeto],camera, renderer.domElement)
}, ()=>{
    
    console.log('cargando')
}, ()=>{
    console.log('error')
},
);

torusKnot.position.y = -12
torusKnot.position.x = 5

camera.position.z = 50


function animate(){
    requestAnimationFrame(animate);
    torusKnot.rotation.z += 0.05
    renderer.render(scene, camera)
}
animate();
