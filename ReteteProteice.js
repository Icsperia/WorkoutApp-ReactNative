import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function ReteteProteice({ navigation }) {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.card}>
                <Text style={styles.subtitlu}>Rețete proteice pentru masă musculară</Text>
                <Text style={styles.intro}>
                    Creșterea masei musculare nu depinde doar de antrenamente intense, ci și de o alimentație corespunzătoare. Proteinele sunt elemente esențiale în procesul de reconstrucție și dezvoltare musculară, iar integrarea lor în mesele zilnice este vitală pentru progresul sportivilor și al celor pasionați de fitness.
                    {'\n\n'}
                    În această selecție de rețete vei descoperi combinații echilibrate între proteine animale sau vegetale, carbohidrați complecși și grăsimi sănătoase. Fiecare preparat este gândit să furnizeze nutrienții necesari pentru recuperare, energie și susținerea efortului fizic.
                    {'\n\n'}
                    Rețetele sunt concepute pentru a fi ușor de pregătit și pline de gust, asigurând un aport optim de macronutrienți și micronutrienți necesari unei alimentații orientate spre performanță și sănătate.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitlu}>Cotlete de porc picante cu ananas</Text>
                <Text style={styles.cardText}>
                    Pudra de chili, ardeii chipotle și dulceata intensă a ananasului creează un echilibru perfect într-un preparat gustos și aromat.
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://www.gradinamea.ro/_files/Image/articole/5/rulada_cubaneza_din_cotlet_de_porc_cu_ananas.jpg',
                    }}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitlu}>Tigaie cu carne de vită și legume</Text>
                <Text style={styles.cardText}>
                    Un preparat simplu, dar nutritiv, combinând carne de vită cu legume precum dovlecel, sparanghel și ardei gras.
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://cdn.adh.reperio.news/image-c/ce2c6996-0d69-4f50-a375-17c3969e908a/index.jpeg?p=f%3Dpng%26w%3D1400%26r%3Dcontain',
                    }}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.subtitlu}>Mușchi de vită cu sparanghel și cartofi roșii</Text>
                <Text style={styles.cardText}>
                    O masă completă post-antrenament cu proteine, carbohidrați și legume bogate în vitamine și fier.
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://www.vinuricotnari.ro/wp-content/uploads/2015/11/friptura-de-vitel-cu-sparanghel-si-rosii-cherry-1024x1024.jpg',
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    subtitlu: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#34495e',
    },
    intro: {
        fontSize: 16,
        color: '#2c3e50',
        textAlign: 'justify',
        lineHeight: 24,
    },
    cardText: {
        fontSize: 16,
        color: '#2c3e50',
        textAlign: 'justify',
        marginBottom: 10,
        lineHeight: 22,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
});

export default ReteteProteice;
