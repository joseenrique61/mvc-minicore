import { Rule, Sale, Seller } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { useMemo } from 'react';

interface IndexProps {
    sellers: Seller[];
    rules: Rule[];
    sales: Sale[];
    comissions?: Record<string, number>;
    start_date?: string;
    end_date?: string;
}

export default function Index({ sellers, rules, sales, comissions, start_date, end_date }: IndexProps) {
    const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
        start_date: start_date || '',
        end_date: end_date || '',
    });

    const sortedSales = useMemo(() => {
        const salesCopy = [...sales];

        salesCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return salesCopy;
    }, [sales]);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (data.start_date && data.end_date && new Date(data.start_date) > new Date(data.end_date)) {
            setError('end_date', 'La fecha final no puede ser menor que la fecha inicial');
            return;
        }
        post('/');
    }

    return (
        <>
            <Head title="Commissions Dashboard">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <main className="comissions-dashboard__grid">
                <section className="comissions-dashboard__panel comissions-dashboard__panel--sellers">
                    <h2 className="comissions-dashboard__panel-title">Sellers</h2>
                    <div className="comissions-dashboard__table-wrapper">
                        <table className="comissions-dashboard__table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sellers.map((seller) => (
                                    <tr key={seller.id}>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="comissions-dashboard__panel comissions-dashboard__panel--rules">
                    <h2 className="comissions-dashboard__panel-title">Commission Rules</h2>
                    <div className="comissions-dashboard__table-wrapper">
                        <table className="comissions-dashboard__table">
                            <thead>
                                <tr>
                                    <th>Rule Name</th>
                                    <th>Percentage</th>
                                    <th>Min Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rules.map((rule) => (
                                    <tr key={rule.id}>
                                        <td>{rule.name}</td>
                                        <td>{rule.percentage*100}%</td>
                                        <td>${rule.min_amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="comissions-dashboard__panel comissions-dashboard__panel--sales">
                    <h2 className="comissions-dashboard__panel-title">Sales</h2>
                    <form onSubmit={submit} className="comissions-dashboard__form">
                        <div className="comissions-dashboard__form-group">
                            <label htmlFor="start_date" className="comissions-dashboard__label">
                                Start Date
                            </label>
                            <input
                                id="start_date"
                                type="date"
                                value={data.start_date}
                                className="comissions-dashboard__input"
                                onChange={(e) => {
                                    setData('start_date', e.target.value);
                                    clearErrors('end_date');
                                }}
                            />
                        </div>
                        <div className="comissions-dashboard__form-group">
                            <label htmlFor="end_date" className="comissions-dashboard__label">
                                End Date
                            </label>
                            <input
                                id="end_date"
                                type="date"
                                value={data.end_date}
                                className="comissions-dashboard__input"
                                onChange={(e) => {
                                    setData('end_date', e.target.value);
                                    clearErrors('end_date');
                                }}
                            />
                            {errors.end_date && <p className="comissions-dashboard__label--error">{errors.end_date}</p>}
                        </div>
                        <button
                            type="submit"
                            className="comissions-dashboard__button comissions-dashboard__button--filled"
                            disabled={processing || !data.start_date || !data.end_date}
                        >
                            Filter
                        </button>

                        <button className="comissions-dashboard__button comissions-dashboard__button--outlined">
                            <a href='/'>Clear</a>
                        </button>
                    </form>

                    <div className="comissions-dashboard__table-wrapper">
                        <table className="comissions-dashboard__table">
                            <thead>
                                <tr>
                                    <th>Seller</th>
                                    <th>Amount</th>
                                    {comissions && <th>Commission</th>}
                                    {!comissions && <th>Date</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {sortedSales.map((sale) => (
                                    <tr key={sale.id}>
                                        <td>{sale.seller.name}</td>
                                        <td>${sale.amount.toFixed(2)}</td>
                                        {comissions && <td>${comissions[sale.seller.name].toFixed(2)}</td>}
                                        {!comissions && <td>{sale.date.toString().split("T")[0]}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
}
