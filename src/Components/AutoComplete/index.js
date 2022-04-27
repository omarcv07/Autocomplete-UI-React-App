import React, { Fragment, useEffect, useState } from "react";
import { Input, InputGroup, InputLeftElement, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

import DataList from "./DataList";
import { Search2Icon } from "@chakra-ui/icons";

const AutoComplete = ({ getSearchData }) => {
    const [searchValue, setSearchValue] = useState("");
    const [isSearchValueSelected, setIsSearchValueSelected] = useState(false);

    const searchQuery = useQuery("dataSearch", () => getSearchData(searchValue));
    const dataList = searchValue && searchQuery.data && searchQuery.data.rows.length > 0 ? searchQuery.data.rows : [];

    const inputOnChange = (e) => {
        setSearchValue(e.target.value);
        setIsSearchValueSelected(false);
    }

    const selectOption = (id) => {
        const selectedOption = dataList.find((a) => a._id === id);

        setSearchValue(selectedOption.title);
        setIsSearchValueSelected(true);
    }

    useEffect(() => {
        searchQuery.refetch();
    }, [searchValue]);

    const InputLeftIcon = searchQuery.isLoading ? Spinner : Search2Icon;
    return (
        <Fragment>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<InputLeftIcon color="gray.300" />}
                    height="100%"
                />
                <Input
                    _hover={{ border: 'black solid 1px' }}
                    _focus={{ border: 'blue solid 2px' }}
                    backgroundColor="white"
                    value={searchValue}
                    fontSize="lg"
                    size="lg"
                    placeholder="Search"
                    onChange={inputOnChange}
                />
            </InputGroup>
            {!isSearchValueSelected ? <DataList dataList={dataList} selectOption={selectOption} /> : null}
            {searchQuery.isError ? <Text color="red" fontSize='md'>{searchQuery.error.message}</Text> : null}
        </Fragment>
    );
}

export default AutoComplete;