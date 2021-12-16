import React from 'react';
import DocViewer,{ DocViewerRenderers }  from "react-doc-viewer";
import PropTypes from 'prop-types';
import './DocumentViewer.css';

const DocumentViewer = () => (
  <div className="DocumentViewer">
    <DocViewer
      pluginRenderers={DocViewerRenderers}
  
    />;
  </div>
);

DocumentViewer.propTypes = {};

DocumentViewer.defaultProps = {};

export default DocumentViewer;
