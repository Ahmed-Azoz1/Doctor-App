import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import LineSection from '../../Shared/LineSection';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';

const AppointmentCardItem = ({ appointment, onDelete }) => {
    const imageUrl = appointment?.attributes?.doctors?.data[0]?.attributes?.image?.data?.attributes?.url;
    const formattedDate = moment(appointment?.attributes?.date).format('MMMM D');
    const handleDelete = () => {
        // يمكنك هنا استخدام API لحذف الحجز من Strapi
        onDelete(appointment?.id); // إرسال id الخاص بالحجز إلى الدالة onDelete
    };

    return (
        <View style={{ backgroundColor: Colors.white, padding: 10, borderWidth: 1, borderColor: Colors.light_gray, borderRadius: 10, marginBottom: 35 }}>
            <Text
                style={{
                    fontSize: 18,
                    fontFamily: 'roboto-medium',
                    marginTop: 5
                }}
            >
                {formattedDate} - {appointment?.attributes?.time}
            </Text>

            <LineSection />

            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Image style={{ height: 100, width: 100, borderRadius: 8 }} source={{ uri: imageUrl }} />

                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text
                        style={{
                            fontFamily: 'roboto-medium',
                            fontSize: 18
                        }}
                    >
                        {appointment?.attributes?.doctors?.data[0]?.attributes?.name}
                    </Text>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
                        <Ionicons name="location" size={24} color={Colors.primary} />
                        <Text style={{ fontSize: 15, fontFamily: 'roboto', color: Colors.gray }}>
                            {appointment?.attributes?.doctors?.data[0]?.attributes?.address}
                        </Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 3 }}>
                        <Ionicons name="document-text" size={24} color={Colors.primary} />
                        <Text style={{ fontSize: 15, fontFamily: 'roboto', color: Colors.gray }}>
                            Booking Id: #{appointment?.id}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        marginLeft: 'auto',
                        padding: 5
                    }}
                    onPress={handleDelete}
                >
                    <Ionicons name="close" size={24} color={Colors.red} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AppointmentCardItem;
