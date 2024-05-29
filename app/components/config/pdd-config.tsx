import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import CustomModal from "../module/modal";
import { Component } from "react";
import { CheckBox } from "@rneui/themed";

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: "row",
        alignItems: 'center',
    },
    
  });

interface PddConfigContentPropsInterface {
    onSaveData: () => void;
}

interface PddConfigContentStateInterface {
    lmmx: {
        curl: string
    },
    global: {
        autoConfirmReceipt: boolean
        autoGoodReputation: boolean
        autoUploadSceeenHost: boolean
    }
}

class PddConfigContent extends Component<PddConfigContentPropsInterface, PddConfigContentStateInterface> {
    constructor(props: PddConfigContentPropsInterface) {
        super(props)
        this.state = {
            lmmx: {
                curl: ''
            },
            global: {
                autoConfirmReceipt: false,
                autoGoodReputation: false,
                autoUploadSceeenHost: false
            }
        }
    }

    // todo 拼多多表单配置
    render() {
        return (
            <>
                {/* <View style={styles.container}>
                    <Text>总开关</Text>
                    <View style={{flex: 1}}>
                        <CheckBox
                            checked={this.state.global.autoConfirmReceipt}
                            onPress={() => this.setState({global: {...this.state.global, autoConfirmReceipt: !this.state.global.autoConfirmReceipt}})}
                            style={{alignSelf: 'center'}}
                        />
                    </View>
                </View> */}
                <View style={styles.container}>
                    <View style={{flex: 1, flexDirection: "row", justifyContent:"space-around"}}>
                        <CheckBox
                            checked={this.state.global.autoConfirmReceipt}
                            onPress={() => this.setState({global: {...this.state.global, autoConfirmReceipt: !this.state.global.autoConfirmReceipt}})}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            title={"自动收货"}
                            containerStyle={{margin: 0, padding: 0}}
                            textStyle={{margin: 0}}
                            style={{margin: 0}}
                        />
                        <CheckBox
                            checked={this.state.global.autoGoodReputation}
                            onPress={() => this.setState({global: {...this.state.global, autoGoodReputation: !this.state.global.autoGoodReputation}})}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            title={"自动好评"}
                            containerStyle={{margin: 0, padding: 0}}
                            textStyle={{margin: 0}}
                            style={{margin: 0}}
                        />
                        <CheckBox
                            checked={this.state.global.autoUploadSceeenHost}
                            onPress={() => this.setState({global: {...this.state.global, autoUploadSceeenHost: !this.state.global.autoUploadSceeenHost}})}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            title={"自动上传截图"}
                            containerStyle={{margin: 0, padding: 0}}
                            textStyle={{margin: 0}}
                            style={{margin: 0}}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text>Lmmx-Curl</Text>
                    <TextInput
                        placeholder="请输入Lmmx Curl抓包数据"
                        value={this.state.lmmx.curl}
                        onChangeText={text => this.setState({lmmx: {...this.state.lmmx, curl: text}})}
                        style={{borderBottomWidth: 1, borderColor: '#909399', flex: 1, marginLeft: 5}}
                    />
                </View>
                <View style={styles.container}>
                    <Text>蚁淘-Curl</Text>
                    <TextInput
                        placeholder="蚁淘 Curl抓包数据"
                        value={this.state.lmmx.curl}
                        onChangeText={text => this.setState({lmmx: {...this.state.lmmx, curl: text}})}
                        style={{borderBottomWidth: 1, borderColor: '#909399', flex: 1, marginLeft: 5}}
                    />
                </View>
                <View style={{...styles.container, justifyContent: "flex-end", marginTop: 20}}>
                    <Button title={"保存数据"} onPress={this.props.onSaveData} />
                </View>
            </>
        )
    }
}



interface PddConfigStateInterface {
    visible: boolean
}
interface PddConfigPropsInterface {

}

export default class PddConfig extends Component<PddConfigPropsInterface, PddConfigStateInterface> {
  
    constructor(props: PddConfigPropsInterface) {
        super(props ?? {})
        this.state = {
            visible: false 
        }
    }

    setVisiable(status: boolean) {
        this.setState({visible: status})
    }

    onSaveConfig() {
        console.log('数据保存')
        this.setState({visible: false})
    }

    render() {
        return (
            <>
            <CustomModal
                title={"拼多多配置"}
                content={<PddConfigContent onSaveData={(...args) => this.onSaveConfig(...args)} />}
                visible={this.state.visible}
                onClose={() => this.setState({visible: false})}
            />
        </>
        )
    }
}

// const _PddConfig = forwardRef<PddConfigProps, PddConfigRef>((_, ref) => {
//     const [modal, setModal] = useState<boolean>(false)
//      // 暴露 getConfig 方法给 ref
//     useImperativeHandle(ref, () => ({
//         setVisible: (status: boolean) => setModal(status),
//     }));
//     return (
//         <>
//             <CustomModal
//                 title={"拼多多配置"}
//                 content={<PddConfigContent />}
//                 visible={modal}
//                 onClose={() => setModal(false)}
//             />
//         </>
//     )
// })

// export default PddConfig