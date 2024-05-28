import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomModal from "../module/modal";
import { Component } from "react";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    },
    
  });

interface PddConfigContentPropsInterface {
    
}

interface PddConfigContentStateInterface {
    lmmx: {
        curl: string
    },
    global: {
        autoConfirmReceipt: boolean
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
                autoConfirmReceipt: false
            }
        }
    }

    // todo 拼多多表单配置
    render() {
        return (
            <>
                <View style={styles.container}>
                    <Text>总开关</Text>
                    <View style={{flex: 1}}>
                    <CheckBox
                        value={this.state.global.autoConfirmReceipt}
                        onValueChange={(v: boolean) => this.setState({global: {...this.state.global, autoConfirmReceipt: v}})}
                        style={{alignSelf: 'center'}}
                    />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text>Lmmx-Curl</Text>
                    <TextInput
                        placeholder="请输入Lmmx Curl抓包数据"
                        value={this.state.lmmx.curl}
                        onChangeText={text => this.setState({lmmx: {...this.state.lmmx, curl: text}})}
                        style={{borderBottomWidth: 1, borderColor: '#909399', flex: 1}}
                    />
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

    render() {
        return (
            <>
            <CustomModal
                title={"拼多多配置"}
                content={<PddConfigContent />}
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