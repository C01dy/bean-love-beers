import React from 'react';
import {PunkbeerServiceConsumer} from "../punkbeer-service-context";

const WithPunkbeerService = (Wrapped) => {
	return (props) => {
		return (
			<PunkbeerServiceConsumer>
				{
					(punkbeerService) => {
						return (
							<Wrapped {...props} punkbeerService={punkbeerService}/>
						)
					}
				}
			</PunkbeerServiceConsumer>
		)
	}
};