import React from "react";
import RouteList from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { OidcProvider } from "@axa-fr/react-oidc";

// const configuration = {
//   client_id: "interactive.public.short",
//   redirect_uri: window.location.origin + "/authentication/callback",
//   silent_redirect_uri:
//     window.location.origin + "/authentication/silent-callback", // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
//   scope: "openid profile email api offline_access",
//   authority: "https://demo.duendesoftware.com",
//   service_worker_only: false,
// };

const configuration = {
  client_id: "oidc-client",
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri:
    window.location.origin + "/authentication/silent-callback", // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  scope: "product.read product.write",
  authority: "http://localhost:9001",
  service_worker_relative_url: "/OidcServiceWorker.js",
  service_worker_only: true,
};

function App() {
  return (
    <div className="App">
      <OidcProvider configuration={configuration}>
        <Router>
          <RouteList />
        </Router>
      </OidcProvider>
    </div>
  );
}

export default App;
