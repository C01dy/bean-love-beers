import React from 'react';

const {
    Provider: PunkbeerServiceProvider,
    Consumer: PunkbeerServiceConsumer
} = React.createContext();

export {
    PunkbeerServiceConsumer,
    PunkbeerServiceProvider
}