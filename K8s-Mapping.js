// ==UserScript==
// @name         K8s Mapping
// @namespace    https://github.com/Ssssv11/TamperMonkey-Scripts/
// @version      1.0
// @description  K8s Mapping script for Tampermonkey
// @author       Ssssv
// @match        http://devops.ks1.wezhuiyi.com/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
  'use strict';

  function getSelectionText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    return text;
  }

  function openPrompt() {
    var selectedText = getSelectionText();

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

  function createIcon() {
    var icon = document.createElement('div');
    icon.setAttribute('style', 'position: fixed; z-index:9999; bottom: 20px; right: 20px; width: 30px; height: 30px; border-radius: 50%; background-color: #292a73; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); cursor: pointer; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 10px; color: #f7a400;');
    icon.textContent = 'K8s';
    icon.addEventListener('click', openPrompt);
    document.body.appendChild(icon);
  }

    createIcon();
})();
