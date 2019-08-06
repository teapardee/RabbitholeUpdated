from django.contrib import admin
from .models import Rabbithole # add this

class RabbitholeAdmin(admin.ModelAdmin):  # add this
    list_display = ('category', 'sub_category', 'channel_name', 'uploads', 'subscribers', 'view_count', 'thumbnail', 'customUrl') # add this

# Register your models here.
admin.site.register(Rabbithole, RabbitholeAdmin) # add this