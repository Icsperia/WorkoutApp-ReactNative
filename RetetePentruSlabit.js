import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function RetetePentruSlabit() {
    return (
        <SafeAreaProvider>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.titlu}>Plan alimentar pentru slăbit</Text>


                <View style={styles.card}>
                    <Text style={styles.subtitlu}>Introducere</Text>
                    <Text style={styles.cardText}>
                        Slăbitul eficient nu înseamnă doar reducerea caloriilor, ci și alegerea alimentelor potrivite care sprijină metabolismul, oferă sațietate și furnizează nutrienți esențiali.
                        În această prezentare vei descoperi alimente ideale pentru o dietă echilibrată și sănătoasă.
                        Fiecare dintre ele joacă un rol important în procesul de pierdere în greutate — fie că accelerează arderea grăsimilor, reduc pofta de mâncare sau îmbunătățesc digestia.
                        Integrarea acestor opțiuni în meniul tău zilnic poate aduce rezultate vizibile, fără a compromite sănătatea sau energia.
                    </Text>
                </View>


                <View style={styles.card}>
                    <Text style={styles.subtitlu}>Pește</Text>
                    <Text style={styles.cardText}>
                        Peștele este foarte indicat în slăbit: puține calorii, multe proteine, acizi grași Omega 3 și vitamina D. Sprijină masa musculară și sănătatea cardiovasculară.
                    </Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://cdn.knd.ro/media/521/2862/575/20074778/1/peste-gatit-2.jpg?w=1200&h=675',
                        }}
                    />
                </View>


                <View style={styles.card}>
                    <Text style={styles.subtitlu}>Carne slabă</Text>
                    <Text style={styles.cardText}>
                        Carnea de vită, pui sau curcan este bogată în proteine esențiale pentru slăbit. Conține aminoacizi, vitamine B și minerale precum fier și zinc.
                    </Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://www.fanatik.ro/wp-content/thumbnails/74DIR71nFJu6dD5OaCPpEmuho_U=/920x518/smart/filters:contrast(5):format(webp):quality(80)/wp-content/uploads/2024/07/carne.jpg',
                        }}
                    />
                </View>


                <View style={styles.card}>
                    <Text style={styles.subtitlu}>Cereale integrale</Text>
                    <Text style={styles.cardText}>
                        Bogate în fibre și nutrienți, cerealele integrale (pâine, ovăz, orez brun) sprijină digestia și controlul glicemiei. Ajută la sațietate fără calorii goale.
                    </Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://st4.depositphotos.com/13324256/30134/i/450/depositphotos_301345540-stock-photo-top-view-bowls-whole-grains.jpg',
                        }}
                    />
                </View>


                <View style={styles.card}>
                    <Text style={styles.subtitlu}>Orez brun</Text>
                    <Text style={styles.cardText}>
                        Față de orezul alb, orezul brun este mai nutritiv, bogat în fibre, vitamine din grupul B și antioxidanți. Susține digestia și reduce pofta de mâncare.
                    </Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://www.medicover.ro/Data/Files/storage_files/2024/3/25/99287585-b8c9-48e1-a6e4-f88dc1246800/orez-brun.jpg',
                        }}
                    />
                </View>


                <View style={styles.card}>
                    <Text style={styles.subtitlu}>Legume și fructe</Text>
                    <Text style={styles.cardText}>
                        Legumele sunt cele mai bune alimente pentru slăbit: sărace în calorii, dar pline de vitamine și minerale. Fructele oferă energie, dar trebuie consumate moderat.
                    </Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oaW2Iv5bCWY7TiHrf8KaHpXoDpqE8k3H1w&s',
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 16,
        backgroundColor: '#f0f4f8',
    },
    titlu: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#2c3e50',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 10,
        resizeMode: 'cover',
        marginTop: 10,
    },
    subtitlu: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#34495e',
        textAlign: 'center',
    },
    cardText: {
        fontSize: 16,
        color: '#2d3436',
        marginTop: 10,
        textAlign: 'justify',
        lineHeight: 22,
    },
});

export default RetetePentruSlabit;
