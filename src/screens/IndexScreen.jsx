import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContent';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;
