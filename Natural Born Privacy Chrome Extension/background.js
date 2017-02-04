// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

console.log('test');

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Put on your red glasses to read ' + tab.url + '!');
  chrome.tabs.executeScript({
    file: 'effect.js'
  });
});

//returns boolean
function toggleEffect(){
    chrome.storage.sync.set({'active': true}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
}

function get(){
        chrome.storage.sync.get('active', function(test){
            console.log('active', test);
        });
    }