import { Ionicons } from '@expo/vector-icons';
import React, { ReactNode, useState } from 'react';
import { View, Text, Modal, Button, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomModalProps {
  title?: ReactNode | string;
  content?: ReactNode;
  footer?: ReactNode | string;
  closeBySelf?: boolean;
  visible?: boolean;
  onClose?: () => void;
}

const CustomModal: React.FC<CustomModalProps> = (props) => {
    const {
        title = '',
        content = '',
        footer = '',
        closeBySelf = true,
        visible = false,
        onClose = () => {},
      } = props
  const renderTitle = () => {
    if (typeof title === 'string') {
      return <Text>{title}</Text>;
    }
    return title;
  };

  const renderFooter = () => {
    if (typeof footer === 'string') {
      return <Text>{footer}</Text>;
    }
    return footer;
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            {renderTitle()}
            {closeBySelf && (
              <TouchableOpacity onPress={onClose}>
                {/* <Text style={styles.closeButton}>X</Text> */}
                <Ionicons name="close" size={18} color="#909199" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.body}>{content}</View>
          {footer && <View style={styles.footer}>{renderFooter()}</View>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    minWidth: 300,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 18,
  },
  body: {
    marginBottom: 10,
  },
  footer: {
    marginTop: 10,
  },
});

export default CustomModal;