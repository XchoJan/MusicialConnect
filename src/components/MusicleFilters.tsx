import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

const MusicleFilters = () => {
    const instruments = [
        { id: 1, name: 'Гитарист' },
        { id: 2, name: 'Барабанщик' },
        { id: 3, name: 'Бас-гитарист' },
        { id: 4, name: 'Вокалист' },
        { id: 5, name: 'Клавишник' },
        { id: 6, name: 'Саксофонист' },
        { id: 7, name: 'Скрипач' },
        { id: 8, name: 'Ди-джей' },
        { id: 9, name: 'Трубач' },
        { id: 10, name: 'Флейтист' },
        { id: 11, name: 'Ударник (перкуссионист)' },
        { id: 12, name: 'Контрабасист' },
        { id: 13, name: 'Банджоист' },
        { id: 14, name: 'Аккордеонист' },
        { id: 15, name: 'Сессионный музыкант' },
        { id: 16, name: 'Композитор' },
        { id: 17, name: 'Звукорежиссёр' },
        { id: 18, name: 'Бэк-вокалист' },
    ];

    const [selectedId, setSelectedId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSelect = (id: any) => {
        setSelectedId(id === selectedId ? null : id);
        setModalVisible(false); // Закрыть модалку при выборе
    };

    const handleReset = () => {
        setSelectedId(null);
        setModalVisible(false);
    };

    return (
        <View style={{ padding: 16 }}>
            <TouchableOpacity
                style={styles.openButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.openButtonText}>
                    {selectedId
                        ? instruments.find((i) => i.id === selectedId)?.name
                        : 'Select Filter'}
                </Text>
            </TouchableOpacity>

            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                backdropColor="#000"
                backdropOpacity={0.7}
                animationIn="fadeInUp"
                animationOut="fadeOutDown"
                useNativeDriver
            >
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Выбери инструмент</Text>

                    <ScrollView contentContainerStyle={styles.container}>
                        {instruments.map((instrument) => (
                            <TouchableOpacity
                                key={instrument.id}
                                onPress={() => handleSelect(instrument.id)}
                                style={[
                                    styles.button,
                                    selectedId === instrument.id && styles.activeButton,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.buttonText,
                                        selectedId === instrument.id && styles.activeButtonText,
                                    ]}
                                >
                                    {instrument.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                        <Text style={styles.resetButtonText}>Сбросить фильтр</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    openButton: {
        backgroundColor: '#1f1f1f',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
        alignSelf: 'flex-start',
    },
    openButtonText: {
        color: '#ccc',
        fontSize: 16,
    },
    modalContent: {
        backgroundColor: '#121212',
        borderRadius: 12,
        padding: 20,
        maxHeight: '85%',
    },
    modalTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 12,
        fontWeight: '600',
        textAlign: 'center',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#1f1f1f',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        margin: 4,
    },
    activeButton: {
        backgroundColor: '#333',
        borderColor: '#888',
    },
    buttonText: {
        color: '#ccc',
        fontSize: 14,
    },
    activeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    resetButton: {
        marginTop: 16,
        paddingVertical: 10,
        backgroundColor: '#2c2c2c',
        borderRadius: 8,
        alignItems: 'center',
    },
    resetButtonText: {
        color: '#ff6666',
        fontSize: 15,
        fontWeight: '600',
    },
});

export default MusicleFilters;
