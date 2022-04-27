import React from "react";
import { List, ListItem } from "@chakra-ui/react";

const DataList = ({ dataList, selectOption }) => {
    const displayDataList = dataList.map((obj, index) => (
        <ListItem
            onClick={() => selectOption(obj._id)}
            cursor='pointer'
            _hover={{ background: "rgb(219 219 219 / 28%)" }}
            m="0 !important"
            py='3'
            px="4"
            key={index}
        >
            {obj.title}
        </ListItem>
    ));

    if (dataList.length > 0) {
        return (
            <List backgroundColor="white" fontSize="lg" border="1px solid" borderColor="inherit" borderRadius="md" spacing={3}>
                {displayDataList}
            </List>
        )
    }
}

export default DataList