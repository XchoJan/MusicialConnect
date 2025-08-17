import React, {useState} from 'react';
import AppContainer from '../../../components/AppContainer.tsx';
import {FlatList, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from "../../../theme/colors";
import AppButton from "../../../components/AppButton.tsx";
import AppInput from "../../../components/AppInput.tsx";
import CreatePost from "./components/CreatePost.tsx";
import PostReplyes from "./components/PostReplyes.tsx";
import AllExplore from "./components/AllExplore.tsx";

const tabs = ['Explore', 'Replies', 'Create Post'];

const MusicianConnect = () => {
  const [activeTab, setActiveTab] = useState(0);




  const renderContent = () => {
    if (activeTab === 0) {
      return (
         <AllExplore/>
      );
    }

    if (activeTab === 1) {
      return (
          <PostReplyes/>
      );
    }

    if (activeTab === 2) {
      return (
         <CreatePost/>
      );
    }
  };

  return (
      <AppContainer scrollable>
        <Text style={styles.title}>Musician Connect</Text>
        <View style={styles.tabContainer}>
          {tabs.map((tab, index) => (
              <TouchableOpacity
                  key={index}
                  style={[styles.tab, activeTab === index && styles.activeTab]}
                  onPress={() => setActiveTab(index)}
              >
                <Text style={[styles.tabText, activeTab === index && styles.activeTabText]}>
                  {tab}
                </Text>
              </TouchableOpacity>
          ))}
        </View>

        {renderContent()}
      </AppContainer>
  );
};

export default MusicianConnect;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.gray,
    padding: 8,
    borderRadius: 12,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontWeight: '500',
  },
  activeTabText: {
    color: colors.black,
  },
  itemContainer: {
    width: '100%',
    backgroundColor: colors.gray,
    borderRadius: 16,
    padding: 16,
    gap: 12
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16
  },
  itemTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  },
  itemDescription: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '400'
  },
  placeholder: {
    marginTop: 32,
    alignItems: 'center',
  },
  placeholderText: {
    color: '#aaa',
    fontSize: 16
  },
  responds:{
    width: '100%',
    height: 80,
    backgroundColor: colors.gray,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    gap: 18
  },
  respondsImage:{
    width: 60,
    height: 60,
    borderRadius: 100
  },
  addImageBox:{
    width: 100,
    height: 100,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },
  addImageText:{
    fontSize: 50,
    color: '#fff',
    fontWeight: '200'
  }
});
