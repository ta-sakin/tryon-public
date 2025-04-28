(function() {
              const script = document.createElement('script');
              script.src = chrome.runtime.getURL('content-bundle.js');
              script.type = 'module';
              document.head.appendChild(script);
            })();