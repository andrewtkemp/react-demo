import * as React from "react";
import {Link} from "react-router-dom";
export const App: React.StatelessComponent<{}> = (props) => {
    return (
     <div className="container-fluid">
            <Link to ="/">Test</Link>
         </div>
    );
  }