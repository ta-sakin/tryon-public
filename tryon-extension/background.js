chrome.runtime.onMessage.addListener((n,r,s)=>{n.type==="OPEN_POPUP"&&chrome.tabs.query({active:!0,currentWindow:!0},o=>{const e=o[0];e!=null&&e.id&&chrome.action.openPopup()})});
