from rest_framework import serializers
from .models import Rabbithole


class RabbitholeSerializer(serializers.ModelSerializer):
    class Meta:
       model = Rabbithole
       fields = ('category', 'sub_category', 'channel_name', 'uploads', 'subscribers', 'view_count', 'thumbnail', 'customUrl')