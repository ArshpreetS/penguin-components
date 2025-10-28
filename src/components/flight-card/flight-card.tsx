import { HugeiconsIcon } from '@hugeicons/react';
import { Airplane01Icon, FavouriteIcon, Tag01Icon } from '@hugeicons/core-free-icons';
import styles from './flight-card.module.css';


interface FlightCardProps {
    destination: string;
    flightType: string;
    price: number;
    airportCode: string;
}

export function FlightCard(props: FlightCardProps) {
    return <div className={styles.main}>
        <div className={styles.card_outer_container}>
            <div className={styles.card_container}>
                <div className={styles.wishlist}>
                    <HugeiconsIcon icon={FavouriteIcon} color="#fff" />
                </div>
                <div className={styles.card_btm}>
                    <div className={styles.card_content}>
                        <div className={styles.header}>
                            <div className={styles.destination}>
                                {props.destination}
                            </div>
                            <div className={styles.flight_type}>
                                {props.flightType}
                            </div>
                        </div>
                        <div className={styles.card_flight_details}>
                            <div>
                                <HugeiconsIcon icon={Tag01Icon} size={18} color='#bfc0c2' /> from ${props.price}
                            </div>
                            <div>
                                <HugeiconsIcon icon={Airplane01Icon} size={18} color='#bfc0c2' /> {props.airportCode}
                            </div>
                        </div>
                        <div className={styles.cta_button}>
                            Search flight
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >;
}