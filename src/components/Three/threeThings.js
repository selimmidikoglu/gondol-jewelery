import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";


export default class ThreeThings extends Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 1, 5000 );
        var renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setClearColor("#303841")
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.mount.appendChild( renderer.domElement );
      
        var geometry = new THREE.CylinderBufferGeometry( 0.5, 1, 1 );
        var material = new THREE.MeshStandardMaterial( { color: 0x7eeb } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        const light = new THREE.HemisphereLight( 0xffff5b, 0x080820, 1 );
        scene.add( light );
camera.position.z = 5;
camera.position.y = 0;
var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube.rotation.z += 0.01;
            renderer.render( scene, camera );
        };
        animate();
    }
    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}