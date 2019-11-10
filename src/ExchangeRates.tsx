import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
	{
		rates(currency: "USD") {
			currency
			rate
		}
	}
`;

interface Data {
    currency: string;
    rate: number;
}

interface CurrencyData {
    rates: Data[];
}

export const ExchangeRates: React.FC = () => {
	const { loading, error, data } = useQuery<CurrencyData, Data>(EXCHANGE_RATES);

	if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

	return (
		<div>
			{data && data.rates.map(({ currency, rate }) => (
				<div key={currency}>
					<p>
						{currency}: {rate}
					</p>
				</div>
			))}
		</div>
	)
}
