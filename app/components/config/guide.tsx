import { View, Text } from "react-native";
import CustomModal from "../module/modal";
import { Component } from "react";

const guideText = `
    1. 本软件需要手动抓包
    2. 需要在本软件的App中登陆拼多多
`
const GuideContent: React.FC = () => {
    return (
        <>
            <Text>{guideText}</Text>
        </>
    )
}

interface GuidePropsInterface {

}

interface GuideStateInterface {
    visible: boolean
}

export default class Guide extends Component<GuidePropsInterface, GuideStateInterface> {

    constructor(props: GuidePropsInterface) {
        super(props ?? {})
        this.state = {
            visible: false 
        }
    }

    setVisible(status: boolean) {
        this.setState({visible: status})
    }

    render() {
        return (
            <>
                <CustomModal
                    title={"使用说明"}
                    content={<GuideContent />}
                    visible={this.state.visible}
                    onClose={() => this.setState({visible: false})}
                />
            </>
        )
    }
}