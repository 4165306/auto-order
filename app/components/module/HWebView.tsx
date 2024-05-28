import React, { Component } from 'react';
import WebView from 'react-native-webview';

interface CustomComponentProps {
  uri?: string;
  title?: string;
  onLoad?: () => void;
}

interface CustomComponentState {
  uri: string;
  title: string;
}

const beforeJs = `
  
`

class CustomComponent extends Component<CustomComponentProps, CustomComponentState> {
  constructor(props: CustomComponentProps) {
    super(props);
    this.state = {
      uri: props.uri ?? '',
      title: props.title ?? '',
    };
  }

  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }

  getUri = () => {
    return this.state.uri;
  };

  getContext = () => {
    return {
      uri: this.state.uri,
      title: this.state.title,
    };
  };

  render() {
    return (
      <WebView 
        source={{uri: "https://mobile.yangkeduo.com"}}
        injectedJavaScript='document.querySelector("div.pdd-go-to-app")?.remove()'
      />
    );
  }
}

export default CustomComponent;