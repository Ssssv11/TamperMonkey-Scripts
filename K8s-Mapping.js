// ==UserScript==
// @name         K8s Mapping
// @namespace    https://github.com/Ssssv11/TamperMonkey-Scripts/
// @version      1.1
// @description  K8s Mapping script for Tampermonkey
// @author       Ssssv
// @match        *://devops.ks1.wezhuiyi.com/*
// @grant        GM_setClipboard
// @license      MIT
// ==/UserScript==

(function() {
  'use strict';


  function openPrompt1() {

    var namespace = prompt('Please enter the Namespace:', '');
    if (namespace === null) {
      return;
    }

    var port = prompt('Please enter the Port:', '43306');
    if (port === null) {
      return;
    }

    var kubectlCmd = `kubectl -n ${namespace} --kubeconfig=/data/jenkins/workspace/k8s-envs/${namespace}/opt/.kube_config.yaml port-forward mysqlha-0 [port]:3306 --address 0.0.0.0`
    var cmdToCopy = kubectlCmd.replace('[port]', port);
    var result = prompt('Copy and modify the command:', cmdToCopy);

    if (result !== null) {
      GM_setClipboard(result);
    }
  }

  function openPrompt2() {

    var namespace = prompt('Please enter the Namespace:', '');
    if (namespace === null) {
      return;
    }

    var kubectlCmd = `cd /data/jenkins/workspace/k8s-envs/${namespace}/opt && cat .kube_config.yaml`
    var result = prompt('Copy and modify the command:', kubectlCmd);

    if (result !== null) {
      GM_setClipboard(result);
    }
  }

  function createIcon1() {
    // var icon = document.createElement('div');
    // icon.setAttribute('style', 'position: fixed; z-index:9999; bottom: 20px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background-color: #304156; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); cursor: pointer; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 10px; color: #f7a400;');
    // icon.textContent = 'Port';
    // icon.addEventListener('click', openPrompt1);
    // document.body.appendChild(icon);
    var icon = document.createElement('div');

    icon.addEventListener('click', openPrompt1);
    icon.setAttribute('style', 'position: fixed; z-index:9999; bottom: 20px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background-color: #304156; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); cursor: pointer; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 10px; color: #f7a400;');
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'icon');
    svg.setAttributeNS(null, 'viewBox', '0 0 1024 1024');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttributeNS(null, 'd', 'M555.52 203.52a30.08 30.08 0 0 0-37.12 5.76 24.32 24.32 0 0 0 0 35.2l3.84 6.4 5.76 9.6a24.32 24.32 0 0 0 23.04 18.56h7.04c14.08-3.84 21.12-16.64 21.12-37.12a42.88 42.88 0 0 0-26.24-37.12');
    path1.setAttributeNS(null, 'fill', '#ffffff');
    path1.setAttributeNS(null, 'width', '200');
    path1.setAttributeNS(null, 'height', '200');

    var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttributeNS(null, 'd', 'M1006.72 671.36l-5.12-5.12-7.04-7.04a192 192 0 0 0-49.28-42.24h22.4l18.56-3.2a33.92 33.92 0 0 0 27.52-19.84 32 32 0 0 0-10.24-30.72 370.56 370.56 0 0 0-141.44-102.4 12.8 12.8 0 0 1-8.32-7.68c-5.12-11.52-10.88-22.4-16-33.28-11.52-23.68-22.4-46.72-32-69.76a403.2 403.2 0 0 0-107.52-152.96 266.88 266.88 0 0 0-177.28-85.12l-4.48-3.2L512 105.6a154.24 154.24 0 0 0-89.6-35.2 54.4 54.4 0 0 0-45.44 21.76 59.52 59.52 0 0 0-7.68 51.2 140.8 140.8 0 0 0 26.24 48.64 187.52 187.52 0 0 1 31.36 52.48 241.92 241.92 0 0 0 42.24 92.8c3.84 4.48 3.84 5.76 0 12.8a233.6 233.6 0 0 0-12.8 108.8 143.36 143.36 0 0 0 38.4 90.88 51.84 51.84 0 0 0 36.48 16.64 44.8 44.8 0 0 0 44.8-33.92 106.24 106.24 0 0 0 10.24 13.44c23.04 25.6 33.28 37.12 51.2 37.12H640a17.92 17.92 0 0 0 14.08-10.88 19.84 19.84 0 0 0 0-17.92 588.16 588.16 0 0 1-64-122.24 26.24 26.24 0 0 0-25.6-23.04 30.08 30.08 0 0 0-25.6 17.28 95.36 95.36 0 0 0-19.2 39.68 149.12 149.12 0 0 1 4.48-96.64v-3.84a49.28 49.28 0 0 0-5.12-57.6 161.28 161.28 0 0 1-33.92-67.84 218.88 218.88 0 0 0-32-73.6l-22.4-30.72a107.52 107.52 0 0 1 37.12 19.2 75.52 75.52 0 0 0 51.84 19.84h3.84a120.96 120.96 0 0 1 55.68 17.28 348.16 348.16 0 0 1 128 117.76 554.88 554.88 0 0 1 51.84 103.04c7.04 17.92 14.08 34.56 21.76 49.92a104.32 104.32 0 0 0 74.24 64 175.36 175.36 0 0 1 60.16 31.36 384 384 0 0 0-42.88 10.88 32.64 32.64 0 0 0-23.04 19.2 35.2 35.2 0 0 0 4.48 30.08 134.4 134.4 0 0 0 43.52 46.72 192 192 0 0 0 38.4 22.4 286.08 286.08 0 0 1 37.12 22.4 33.28 33.28 0 0 0 17.92 7.04 20.48 20.48 0 0 0 18.56-10.24 28.16 28.16 0 0 0-7.04-37.12zM83.2 673.28L112 768l53.76-95.36h54.4l-20.48 152.96h-46.72l12.8-80L128 815.36h-44.8L64 748.16 52.48 825.6H5.76l21.12-142.08-10.88-10.24zM248.32 720l-7.68-7.68h56.96l14.08 56.96 24.32-51.84-5.12-5.12h59.52l-87.04 159.36a18.56 18.56 0 0 1-7.04 7.04 16.64 16.64 0 0 1-10.88 0h-47.36l17.92-17.28 19.84-38.4zM512 794.88l5.12-31.36H415.36l12.8-90.24h152.32l-4.48 44.16h-52.48l3.2-17.92h-49.28l-7.68 38.4H576l-10.24 69.76a14.72 14.72 0 0 1 0 7.04 19.84 19.84 0 0 1-4.48 5.76 24.96 24.96 0 0 1-7.04 3.84H407.68l5.12-41.6 7.68 10.88zM757.12 673.28a17.92 17.92 0 0 1 12.8 5.12 13.44 13.44 0 0 1 3.2 12.8l-12.8 90.88 14.72 5.12-5.12 30.72-20.48-7.68v15.36H614.4a12.8 12.8 0 0 1-5.76-3.84 16.64 16.64 0 0 1-3.2-5.76 8.96 8.96 0 0 1 0-7.04l17.92-134.4z m-69.12 113.92l4.48-31.36 21.12 7.68 7.68-64h-51.84l-12.8 100.48h51.84v-5.12z');
    path2.setAttributeNS(null, 'fill', '#ffffff');
    path2.setAttributeNS(null, 'width', '200');
    path2.setAttributeNS(null, 'height', '200');

    var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttributeNS(null, 'd', 'M867.84 673.28l-17.92 128h100.48v25.6h-136.32a14.72 14.72 0 0 1-12.16-5.12 20.48 20.48 0 0 1-3.84-12.8l16-124.16-8.32-10.24z');
    path3.setAttributeNS(null, 'fill', '#ffffff');
    path3.setAttributeNS(null, 'width', '200');
    path3.setAttributeNS(null, 'height', '200');

    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path2);
    icon.appendChild(svg);

    document.body.appendChild(icon);
  }
  function createIcon2() {
    // var icon = document.createElement('div');
    // icon.setAttribute('style', 'position: fixed; z-index:9999; bottom: 55px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background-color: #304156; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); cursor: pointer; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 10px; color: #f7a400;');
    // icon.textContent = 'Lens';
    // icon.addEventListener('click', openPrompt2);
    // document.body.appendChild(icon);
    var img = document.createElement('img');
    img.setAttribute('src', 'https://k8slens.dev/images/lens-logo-icon.svg');
    img.setAttribute('style', 'position: fixed; z-index:9999; bottom: 55px; right: 15px; width: 30px; height: 30px; border-radius: 50%; background-color: #3D90CE; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); cursor: pointer; display: flex; justify-content: center; align-items: center;');
    img.addEventListener('click', openPrompt2);
    document.body.appendChild(img);
  }

    createIcon1();
    createIcon2();
})();
